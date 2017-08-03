
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FundersSchema = new Schema({
	funder: {
		type: Schema.Types.ObjectId,
		ref: "userSecure"
	},
	project_title: {
		type: Schema.Types.ObjectId,
		ref: "fundingProjects"
	},
	amount: {
		type: Number,
		default: 0
	}			
});

var Funders = mongoose.model("Funders", FundersSchema);

module.exports = Funders;