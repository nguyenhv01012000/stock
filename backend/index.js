const express = require('express')
const http = require("http");
const https = require('https');
const fs = require('fs');
const app = express();
const socketIo = require("socket.io");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const enableWS = require("express-ws");

var Chat = require("./models/chat.model");
var Notice = require("./models/notice.model");

var productRoutes = require('./routes/product');
var newsRoutes = require('./routes/news');
var userRoutes = require('./routes/user');
var chatRoutes = require('./routes/chat');
var emailRoutes = require('./routes/email');  
var orderRoutes = require('./routes/order'); 
var vietnamRoutes = require('./routes/vietnam');
var todosRoutes = require('./routes/todos');
var noticeRoutes = require('./routes/notice');

mongoose.connect('mongodb://domino:password123@103.221.222.134:27011/domino?authSource=admin&retryWrites=true', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// var options = {
//   key: fs.readFileSync('privatekey.pem'),
//   cert: fs.readFileSync('certificate.pem'),
// };
// const server = https.createServer(options, app);
const server = http.createServer(app);  


var cors = require('cors');
app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(express.static('public'))

const io = socketIo(server);
enableWS(app);

const hub = new Map();

app.ws("/subscribe", (ws, req) => {
  const { apptransid } = req.query;
  console.log(req.query)
  hub.set(apptransid, ws);
  ws.on("close", () => {
    hub.delete(apptransid);
  });
});

app.use(function(req, res, next) {
  res.header('application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use("/products", productRoutes);
app.use("/news", newsRoutes);
app.use("/users", userRoutes);
app.use("/chat", chatRoutes);
app.use("/email", emailRoutes); 
app.use("/order", orderRoutes);
app.use("/vietnam", vietnamRoutes);
app.use("/todos", todosRoutes);
app.use("/notice", noticeRoutes);
app.use(cors());
app.options('*', cors());  

io.on('connection', async function (socket) {  

  socket.on('join', async function (data) { 
    if (data.isAdmin === true) {
      socket.join(data.sessionId)
      const allchat = await Chat.find();
      io.in('admin').emit('send-all-chat', allchat)
    } else {
      if (data.sessionId) {
        socket.join(data.sessionId)
        Chat.find({ sessionId: data.sessionId }).then(function(chat) {
          socket.emit('sendFirstInfo', chat);
        })
      }
    }
  })
  
  socket.on('firstMessage', async function(data) {
    await Chat.create(data)
    const allchat = await Chat.find();
    io.in('admin').emit('client-msg', {
      userChatInfo: [data],
      allchat: allchat
    })
  })

  socket.on('messageSend', async function(data) {
    Chat.findOne({ sessionId: data.sessionId })
      .updateOne({$push: { chatContent: {text: data.text, time: data.time} }})
      .exec()
    const userChatInfo = await Chat.find({ sessionId : data.sessionId })
    const allchat = await Chat.find();
    setTimeout(() => {
      io.in('admin').emit('client-msg', {
        userChatInfo: userChatInfo,
        allchat: allchat
      })
    }, 100)

    const noticeData = {
      noticeContent: `You have new message from ${userChatInfo[0].chatName}`,
      isRead: false,
      noticeTime: new Date()
    }
    await Notice.create(noticeData)
    const notice = await Notice.find()
    setTimeout(() => {
      io.in('admin').emit('placeAnOrder-notice', notice)
    }, 100)
  })

  socket.on('placeAnOrder', async function(data) {
    const notice = await Notice.find()
    setTimeout(() => {
      io.in('admin').emit('placeAnOrder-notice', notice)
    }, 100)
  })

  socket.on('messageSend-admin', async function(data) {
    await Chat.findOne({ sessionId: data.roomId })
      .updateOne({$push: { chatContent: {fromAdmin: true, text: data.text, time: data.time} }})
      .exec()
    socket.to(data.roomId).emit('admin-msg', data); 
  })
})

server.listen(4004, () => console.log(`Listening on port ${4004}`));

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("ERROR...");
})
