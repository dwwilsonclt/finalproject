
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSecureSchema = new Schema({
	username: {
		type: String
//		required: true
	},
	password: {
		type: String,
		unique: true
//		required: true
	}
});

var UserSecure = mongoose.model("UserSecure", UserSecureSchema);

module.exports = UserSecure;