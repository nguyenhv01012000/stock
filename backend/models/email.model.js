const mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
	bankAccount: Number,
	bankName: String,
	accountName: String,
	},
    {
    	versionKey: false
    }
)

var Email = mongoose.model('Email', emailSchema);

module.exports = Email;