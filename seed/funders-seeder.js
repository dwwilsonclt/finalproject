var funders = require("../models/funders.js");
var mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/hashTagFund");

var funders = [
	new funders({
		funder: " ",
		project_title: "",
		amount: 0
	}),
	new funders({
		funder: " ",
		project_title: "",
		amount: 0
	})
];

//var done = 0;
//for (var i = 0; i < funders.length; i++) {
//	funders[i].save(function(err, result) {
//		done++;
//		if (done === funders.length) {
//			exit();
//		}
//	});
//}

//function exit() {
//	mongoose.disconnect();
//}