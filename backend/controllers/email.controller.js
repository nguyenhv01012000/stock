var Email = require("../models/email.model");
var User = require("../models/user.model");

var nodemailer = require('nodemailer');
const simpleParser = require('mailparser').simpleParser;
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// Login with admin email
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
// 		user: 'nguyenvklxxx@gmail.com',
// 		pass: 'Hoangnguyen99'
// 	}
// })
// transporter.verify(function(error, success) {
//     if (error) {
//         console.log(error);
//     } else { 
//     }
// });

module.exports.index = async function(req, res) {

    console.log("check")
     
    Email.findOneAndUpdate(
        { _id: req.params.idUser, "sendedEmail.emailId": req.params.idEmail},
        { 
            $set: {
                "sendedEmail.$.isSeen": true
            }
        },
        function(error) {
            if (error) {
                console.log(error);
            }
        }
    );

    var emailList = await Email.find()
    
    res.send(emailList)
}
module.exports.list = async function(req, res) {
	var email = await Email.find();
	res.json(email);
}
module.exports.info = function(req, res) {
	var id = req.params.id;
	Email.findById({ _id: id }).then(function(email) {
		res.json(email);
	});
};
module.exports.updateEmail =async function(req, res) {
    const token = req.headers.authorization.split(' ')[1];

    const verified = jwt.verify(token, 'hahaha');
    var user = await User.findOne({ userEmail: verified.user.userEmail });
 
    if (!user || user.userRole != "admin") {
        return res.status(400).send('Ban ko co quyen!');
    }

    var id = req.params.id;
    Email.findByIdAndUpdate(id, req.body, function(error) {
        if (error) {
            console.log(error);
        }
    })
    res.status(200).send("ok");
};

module.exports.postEmail = async function(req, res) {

    // var email = req.body.subscriber;
	// var emailData = await Email.findOne({ subscriberEmail: email });
	// if (emailData) {
	// 	return res.status(400).send('Email already subscriber!');
	// }

    const token = req.headers.authorization.split(' ')[1];

    const verified = jwt.verify(token, 'hahaha');
    var user = await User.findOne({ userEmail: verified.user.userEmail });
 
    if (!user || user.userRole != "admin") {
        return res.status(400).send('Ban ko co quyen!');
    }

    const data = {
		bankAccount: req.body.bankAccount,
		bankName: req.body.bankName,
		accountName: req.body.accountName,
	}
	await Email.create(data)
	res.status(200).send("ok");

    // var mailOptions = {
    //     from: '18521118@gm.uit.edu.vn', 
    //     to: email,
    //     subject: 'Cảm ơn bạn đã đăng kí nhận tin mới tại SOBER shop',
    //     text: 'Cảm ơn bạn đã đăng kí nhận tin mới tại SOBER shop'
    // }

    // transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    // }) 

	// res.status(200).send('Subscriber for news successful!');
}
module.exports.deleteSubscriber = async function(req, res) {
	await Email.findByIdAndRemove({_id: req.body.id})
	res.status(200).send("ok");
}

// module.exports.getAllEmail = async function(req, res) {
//     var imaps = require('imap-simple');
//     const _ = require('lodash');
    
//     var config = {
//         imap: {
//             user: process.env.email,
//             password: process.env.pass,
//             host: 'imap.gmail.com',
//             port: 993,
//             tls: true,
//             authTimeout: 3000
//         }
//     };
    
//     imaps.connect(config).then(function (connection) {
//         return connection.openBox('INBOX').then(function () {
//             var delay = 720 * 3600 * 1000;
//             var yesterday = new Date();
//             yesterday.setTime(Date.now() - delay);
//             yesterday = yesterday.toISOString();
//             var searchCriteria = ['ALL', ['SINCE', yesterday]];
//             var fetchOptions = {
//                 bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)', 'TEXT', ''],
//             };

//             return connection.search(searchCriteria, fetchOptions).then(function (messages) {
//                 let htmlEmail = []
//                 messages.forEach(function (item) {
//                     var all = _.find(item.parts, { "which": "" })
//                     var id = item.attributes.uid;
//                     var idHeader = "Imap-Id: "+id+"\r\n";
//                     simpleParser(idHeader+all.body, (err, mail) => {
//                         // console.log(mail.subject)
//                         htmlEmail.push(mail.html)
//                     });
//                 });
//                 setTimeout(()=>{
//                     res.send(htmlEmail)
//                 }, 500)
//             });
//         });
//     });
// }