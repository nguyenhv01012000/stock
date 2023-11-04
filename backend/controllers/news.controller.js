const { BACKEND } = require("../env.js");
var News = require("../models/news.model.js");

module.exports.index = async function(req, res) {
	const pageOptions = {
		page: parseInt(req.query.page, 10) || 0,
		limit: parseInt(req.query.limit, 10) || 10
	}

	var sort = req.query.sort;
	var news = [];
	var count = 0;

	if(sort == "view" || sort == "BÀI VIẾT ĐỌC NHIỀU"){
		news = await News.find()
			.sort({ newView: "desc" })
			.sort({ newDate: "desc" })
			.skip(pageOptions.page * pageOptions.limit)
			.limit(pageOptions.limit);
		count = await News.count();
	}else if(sort == "latest" || sort == "TIN MỚI NHÂT") {
		news = await News.find()
			.sort({ newDate: "desc" })
			.sort({ newView: "desc" })
			.skip(pageOptions.page * pageOptions.limit)
			.limit(pageOptions.limit);
		count = await News.count();
	}else if(sort == "hot") {
		news = await News.find({ newCate: { "$in" : ["Kiến thức Phân tích cơ bản", "Kiến thức Phân tích kỹ thuật", "Kiến thức Đầu tư tổng hợp"]}})
			.sort({ newDate: "desc" })
			.skip(pageOptions.page * pageOptions.limit)
			.limit(pageOptions.limit);
		count = await News.count({ newCate: { "$in" : ["Kiến thức Phân tích cơ bản", "Kiến thức Phân tích kỹ thuật", "Kiến thức Đầu tư tổng hợp"]}});
	}else if(sort){
		news = await News.find({ newCate: req.query.sort})
			.sort({ newDate: "desc" })
			.skip(pageOptions.page * pageOptions.limit)
			.limit(pageOptions.limit); 
		count = await News.count({ newCate: req.query.sort});
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