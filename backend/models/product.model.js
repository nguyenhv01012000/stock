const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({ 
	productName: String,
    productSale: Number,
    productSold: Number,
	productDate: Date, 
	productPrice: Number,
	productFinalPrice: Number,
    productImg: String, 
	productDes: String,
	productVote: Array, 
	productFeature: Array, 
	productTitle: String, 
	productVideo: String, 
	productTimeCourse: String, 
	productBookNumber: Number, 
	productLearn: Array, 
	productContent: Array, 
	productSubContent: Array, 
	productFromDate: String,
	productToDate: String,
	},
    {
    	versionKey: false
    }
)

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;
