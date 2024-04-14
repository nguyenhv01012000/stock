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
		news = await News.find().sort({ newTime: "desc" });
		count = await News.count();
	}
	res.json({news: news, count:count});
};
function toNonAccentVietnamese(str) {
	str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/Đ/g, "D");
	str = str.replace(/đ/g, "d");
	// Some system encode vietnamese combining accent as individual utf-8 characters
	str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
	str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
	return str.toLowerCase()
	.replace(/ /g, "-")
	.replace(/[^\w-]+/g, "");
}

module.exports.newsByName = function(req, res) {
	var name = req.params.name;
	News.find({}).then(function(news) {
		result = null
		news.forEach(i => {
			if(toNonAccentVietnamese(i.newTitle) ==name) result = i;
		});
		res.json(result);
	});
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
		newTime: new Date(),
		newCate: req.body.newCate,
		newTitle: req.body.newTitle,
		newContent: req.body.newContent || "",
		newIntro: req.body.newIntro || "",
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
			newContent: req.body.newContent || "",
			newIntro: req.body.newIntro || "",
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