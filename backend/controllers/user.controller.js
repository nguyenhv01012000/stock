var User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 	
const { BACKEND } = require("../env");

module.exports.index = async function(req, res) {
	var users = await User.find();
	res.json(users);
};
module.exports.list = async function(req, res) {
	var users = await User.find();
	res.json(users); 
};
module.exports.listId = function(req, res) {
	var id = req.params.id;
	User.findById({ _id: id }).then(function(users) {
		res.json(users);
	})
}
module.exports.info = function(req, res) {
	var id = req.params.id;
	User.findById({ _id: id }).then(function(users) {
		res.json(users);
	})
}
module.exports.postLogin = async function(req, res) {
	var email = req.body.loginEmail;
	var password = req.body.loginPassword;
 
	var user = await User.findOne({ userEmail: email });

	if (!user) {
		return res.status(400).send('Không tìm thấy email này!');
	}

	const validPassword = await bcrypt.compare(password, user.userPassword);
	if (!validPassword) {
		return res.status(400).send('Sai mật khẩu!');
	} 

	const token = jwt.sign({user}, 'hahaha');
	res.status(200).json({token: token, user: user, msg: 'Đăng nhập tài khoản thành công!'});
};
module.exports.register = async function(req, res) {
	var password = req.body.userPassword;
	var user = await User.findOne({ userEmail: req.body.userEmail });

	if (user) {
		return res.status(400).send('Email đã tồn tại!');
	}
	
	try {
		const salt = await bcrypt.genSalt();
		req.body.password = await bcrypt.hash(password, salt);
	} catch {}

	const data = {
		userAvt: "https://static.thenounproject.com/png/4035889-200.png",
		userName: req.body.userName,
		userTinh: "",
		userHuyen: "",
		userAddress: "",
		userPhone: "",
		userEmail: req.body.userEmail,
		userPassword: req.body.password,
		userRole: "user",
		userCreateDay: new Date,
	}

	user = await User.create(data);
	const token = jwt.sign({user}, 'hahaha');
	res.status(200).json({token: token, user: user, msg: 'Đăng ký tài khoản thành công!'});
}
module.exports.updateUser = async function(req, res) {
	var id = req.params.id;
 
	if (req.files.length > 0) {
		const imgArr = [];
		req.files.map((item)=>{
			imgArr.push(BACKEND + `/images/${item.filename}`)
		})
		const img = {
			userAvt: imgArr[0]
		}
		User.findByIdAndUpdate(
			{_id: id}, img,
			function (error) {
			}
		)
	}

	if(req.body.userPassword !== "") {
		try {
			const salt = await bcrypt.genSalt();
			req.body.password = await bcrypt.hash(req.body.userPassword, salt);
		} catch {}
		await User.findByIdAndUpdate(
			{_id: id}, {userPassword: req.body.password},
			function (error) {
			}
		)
	}

	if (req.body.fromAdmin) {
		await User.findByIdAndUpdate(
			{_id: id}, {
				userRole: req.body.userRole,
				userName: req.body.userName,
				userEmail: req.body.userEmail
			},
			function (error) {
			}
		)
	} else {
		const data = {
			userName: req.body.userName,
			userEmail: req.body.userEmail,
			userTinh: req.body.userTinh,
			userHuyen: req.body.userHuyen,
			userPhone: req.body.userPhone,
			userAddress: req.body.userAddress
		}
		await User.findByIdAndUpdate(
			{_id: id}, data,
			function (error) {
			}
		)
	}

	var user = await User.findOne({ _id: id });

	const token = jwt.sign({user}, 'hahaha');
	res.status(200).json({token: token, user: user});
}

module.exports.deleteUser = async function(req, res) {
	await User.findByIdAndRemove({_id: req.body.id})
	res.status(200);
}