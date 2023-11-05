var Product = require("../models/product.model.js");
var Email = require("../models/email.model");
var mongoose = require('mongoose');

var nodemailer = require('nodemailer');
const { BACKEND } = require("../env.js");

// Login with admin email
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: '18521118@gm.uit.edu.vn',
//         pass: 'Dbnbl08081999'
//     }
// })
// transporter.verify(function(error, success) {
//     if (error) {
//         console.log(error);
//     } else { 
//         // console.log('Kết nối thành công!');
//     }
// });

module.exports.index = async function (req, res) {
	const pageOptions = {
		page: parseInt(req.query.page, 10) || 0,
		limit: parseInt(req.query.limit, 10) || 10
	}

	var sort = req.query.sort;
	var products = [];
	var count = 0;

	if (sort == "view" || sort == "TOP BÁN CHẠY") {
		products = await Product.find()
			.sort({ productSold: "desc" })
			.sort({ productDate: "desc" })
			.skip(pageOptions.page * pageOptions.limit)
			.limit(pageOptions.limit);
		count = await Product.count();
	} else if (sort == "latest" || sort == "KHÓA HỌC MỚI RA MẮT") {
		products = await Product.find()
			.sort({ productDate: "desc" })
			.sort({ productSold: "desc" })
			.skip(pageOptions.page * pageOptions.limit)
			.limit(pageOptions.limit);
		count = await Product.count();
	} else {
		products = await Product.find();
		count = await Product.count();
	}
	res.json({ products: products, count: count });
}

module.exports.product = function (req, res) {
	var id = req.params.id;
	Product.findById({ _id: id }).then(function (products) {
		res.json(products);
	});
}

module.exports.postProduct = async function (req, res) {
	const imgArr = [];
	req.files.map((item) => {
		imgArr.push(BACKEND + `/images/${item.filename}`)
	})
	let subContent = req.body.productSubContent.split("``");
	subContent.pop();
	subContent.map((item, index) => {
		subContent[index] = subContent[index].split("`");
	})
	const data = {
		productName: req.body.productName,
		productSale: req.body.productSale,
		productPrice: req.body.productPrice,
		productFinalPrice: req.body.productPrice - (req.body.productPrice * (req.body.productSale / 100)),
		productGroupCate: req.body.productGroupCate,
		productDate: req.body.productDate,
		productImg: imgArr[0],
		productDes: req.body.productDes,
		productSold: 0,
		productTitle: req.body.productTitle,
		productVideo: req.body.productVideo,
		productTimeCourse: req.body.productTimeCourse,
		productBookNumber: req.body.productBookNumber,
		productLearn: req.body.productLearn.split("`"),
		productContent: req.body.productContent.split("`"),
		productSubContent: subContent,
		productFromDate: req.body.productFromDate,
		productToDate: req.body.productToDate,
	}
	await Product.create(data)

	// var emailList = await Email.find()

	// for (let i in emailList) {

	// 	Email.findOne({ _id: emailList[i]._id })
	// 		.updateOne({$push: { 
	// 			sendedEmail: {
	// 				emailId: new mongoose.mongo.ObjectId(),
	// 				isSeen: false
	// 			}
	// 		}})
	// 		.exec()


	// 	var emailInfo = await Email.findById(emailList[i]._id)

	// 	var mailOptions = {
	// 		from: '18521118@gm.uit.edu.vn',
	// 		to: emailList[i].subscriberEmail,
	// 		subject: 'Sản phẩm mới tại SOBER SHOP',
	// 		html: '<p>Sản phẩm mới nè</p>' +
	// 		`<img src={ BACKEND + "/email/${emailList[i]._id}/${emailInfo.sendedEmail[emailInfo.sendedEmail.length - 1].emailId}"} alt=""></img>`
	// 	}

	// 	transporter.sendMail(mailOptions, function(error, info){
	// 	    if (error) {
	// 	      console.log(error);
	// 	    } else {
	// 	      console.log('Email sent: ' + info.response);
	// 	    }
	// 	})
	// }

	res.status(200);
}

module.exports.updateProduct = async function (req, res) {
	var id = req.params.id;
	// if (req.body.deleteImgId) {
	// 	const deletedData = {
	// 		productImg: "",
	// 	}
	// 	await Product.findByIdAndUpdate(id, deletedData)
	// }


	let subContent = req.body.productSubContent.split("``");
	subContent.pop();
	subContent.map((item, index) => {
		subContent[index] = subContent[index].split("`");
	})
	const data = {
		productName: req.body.productName,
		productSale: req.body.productSale,
		productPrice: req.body.productPrice,
		productFinalPrice: req.body.productPrice - (req.body.productPrice * (req.body.productSale / 100)),
		productDes: req.body.productDes,
		productTitle: req.body.productTitle,
		productVideo: req.body.productVideo,
		productTimeCourse: req.body.productTimeCourse,
		productBookNumber: req.body.productBookNumber,
		productLearn: req.body.productLearn.split("`"),
		productContent: req.body.productContent.split("`"),
		productSubContent: subContent,
		productFromDate: req.body.productFromDate,
		productToDate: req.body.productToDate,
	}
	const imgArr = [];
	if (req.files) {
		req.files.map((item) => {
			imgArr.push(BACKEND + `/images/${item.filename}`)
		})
	}
	const img = {
		productImg: imgArr[0]
	}

	if (imgArr[0])
		Product.findByIdAndUpdate(
			{ _id: id },
			{ $set: img },
			function (error) {
			}
		)

	Product.findByIdAndUpdate(id, data, function (error) {
		if (error) {
			console.log(error);
		}
	})
	res.status(200);
}

module.exports.reviewProduct = async function (req, res) {
	var id = req.params.id;

	Product.findByIdAndUpdate(
		{ _id: id },
		{ $push: { productVote: req.body } },
		function (error) {
		}
	)
	res.status(200).send('ok');
}

module.exports.deleteProduct = async function (req, res) {
	await Product.findByIdAndRemove({ _id: req.body.productId })
	res.status(200);
}