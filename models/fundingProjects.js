
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FundingProjectsSchema = new Schema({
	project_title: {
		type: String,
//		required: true
	},
	project_description: {
		type: String,
//		required: true
	},
	image_link: {
		type: String,
//		required: true
	},
	funding: {
		type: Schema.Types.ObjectId,
		ref: "funders"
	}	
});

var FundingProjects = mongoose.model("FundingProjects", FundingProjectsSchema);

module.exports = FundingProjects;