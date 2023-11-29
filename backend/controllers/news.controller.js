const { BACKEND } = require("../env.js");
var News = require("../models/news.model.js");

module.exports.index = async function(req, res) {
	const pageOptions = {
		page: parseInt(req.query.page, 10) || 0,
		limit: parseInt(req.query.limit, 10) || 10
	}

	var sort = req.query.sort;
	var search = req.query.search;
	var news = [];
	var count = 0;
	let currentDate = new Date();

	if(sort == "view" || sort == "BÀI VIẾT ĐỌC NHIỀU"){
		news = await News.find({"newDate": { $lte: currentDate }, newCate: { "$nin" : ["Tài khoản chứng khoán VPS", "Tài khoản chứng khoán AIS", "Tài khoản chứng khoán MBS"]}})
			.sort({ newView: "desc" })
			.sort({ newDate: "desc" })
			.sort({ newTime: "desc" })
			.skip(pageOptions.page * pageOptions.limit)
			.limit(pageOptions.limit);
		count = await News.count({"newDate": { $lte: currentDate }, newCate: { "$nin" : ["Tài khoản chứng khoán VPS", "Tài khoản chứng khoán AIS", "Tài khoản chứng khoán MBS"]}});
	}else if(sort == "latest" || sort == "TIN MỚI NHÂT") {
		news = await News.find({"newDate": { $lte: currentDate }, newCate: { "$nin" : ["Tài khoản chứng khoán VPS", "Tài khoản chứng khoán AIS", "Tài khoản chứng khoán MBS"]}})
			.sort({ newDate: "desc" })
			.sort({ newView: "desc" })
			.sort({ newTime: "desc" })
			.skip(pageOptions.page * pageOptions.limit)
			.limit(pageOptions.limit);
		count = await News.count({"newDate": { $lte: currentDate }, newCate: { "$nin" : ["Tài khoản chứng khoán VPS", "Tài khoản chứng khoán AIS", "Tài khoản chứng khoán MBS"]}});
	}else if(sort == "hot") {
		news = await News.find({ newCate: { "$in" : ["Kiến thức Phân tích cơ bản", "Kiến thức Phân tích kỹ thuật", "Kiến thức Đầu tư tổng hợp"]}, "newDate": { $lte: currentDate }})
			.sort({ newDate: "desc" })
			.sort({ newTime: "desc" })
			.skip(pageOptions.page * pageOptions.limit)
			.limit(pageOptions.limit);
		count = await News.count({ newCate: { "$in" : ["Kiến thức Phân tích cơ bản", "Kiến thức Phân tích kỹ thuật", "Kiến thức Đầu tư tổng hợp"]}, "newDate": { $lte: currentDate }});
	}else if(search){
		news = await News.find({ newTitle: { $regex: '.*' + search + '.*' }, "newDate": { $lte: currentDate }, newCate: { "$nin" : ["Tài khoản chứng khoán VPS", "Tài khoản chứng khoán AIS", "Tài khoản chứng khoán MBS"]}})
			.sort({ newDate: "desc" })
			.sort({ newTime: "desc" })
			// .skip(pageOptions.page * pageOptions.limit)
			// .limit(pageOptions.limit);
		count = await News.count({ newTitle: { $regex: '.*' + search + '.*' }, "newDate": { $lte: currentDate }, newCate: { "$nin" : ["Tài khoản chứng khoán VPS", "Tài khoản chứng khoán AIS", "Tài khoản chứng khoán MBS"]}});
	}
	else if(sort){
		news = await News.find({ newCate: req.query.sort, "newDate": { $lte: currentDate }})
			.sort({ newDate: "desc" })
			.sort({ newTime: "desc" })
			.skip(pageOptions.page * pageOptions.limit)
			.limit(pageOptions.limit); 
		count = await News.count({ newCate: req.query.sort, "newDate": { $lte: currentDate }});
	}else{
		news = await News.find();
		count = await News.count();
	}
	res.json({news: news, count:count});
};

module.exports.news = function(req, res) {
	var id = req.params.id;
	News.findById({ _id: id }).then(function(news) {
		res.json(news);
	});
};

module.exports.cate = function(req, res) {
	var cate = req.params.cate;
	News.find({ newCate: cate }).then(function(news) {
		res.json(news);
	});
}

module.exports.uploadImg = function(req, res) {
	const imgArr = [];
	req.files.map((item)=>{
		imgArr.push( BACKEND + `/images/${item.filename}`)
	})
	res.status(200).send(imgArr[0]);
}

module.exports.postNews = async function(req, res) {
	const imgArr = [];
	req.files.map((item)=>{
		imgArr.push( BACKEND + `/images/${item.filename}`)
	})
	const data = {
		newImg: imgArr[0],
		newTime: req.body.newTime,
		newCate: req.body.newCate,
		newTitle: req.body.newTitle,
		newContent: req.body.newContent,
		newIntro: req.body.newIntro,
		newDate: req.body.newDate,
		newView: 0
	}
	await News.create(data)
	res.status(200).send("ok");
}
module.exports.deleteNews = async function(req, res) {
	await News.findByIdAndRemove({_id: req.body.productId})
	res.status(200).send("ok");
}
module.exports.updateNews = async function(req, res) {
	var id = req.params.id;

	if (req.body.countId) {
		News.findByIdAndUpdate(req.body.countId, { $inc: {newView: 1 }},
			function (error) {
			}
		)
	} else {
		
		const data = {
			newCate: req.body.newCate,
			newTitle: req.body.newTitle,
			newContent: req.body.newContent,
			newIntro: req.body.newIntro,
			newDate: req.body.newDate,
		}
	

		const imgArr = [];
		if (req.files) {
			req.files.map((item)=>{
				imgArr.push( BACKEND + `/images/${item.filename}`)
			})
		}
		const img = {
			newImg: imgArr[0]
		}
		if(imgArr.length && imgArr[0])
		News.findByIdAndUpdate(
			{_id: id},
			{$set: img},
			function (error) {
			}
		)

		News.findByIdAndUpdate(id, data, function(error) {
			if (error) {
				console.log(error);
			}
		})
	}
	res.status(200).send("ok");
} 