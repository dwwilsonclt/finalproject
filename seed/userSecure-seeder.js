var userSecure = require("../models/userSecure.js");
var mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/hashTagFund");

var userSecure = [
	new userSecure({
		username: "Willie",
		password: "will01"
	}),
	new userSecure({
		username: "Jen",
		password: "jdg044"
	}),
	new userSecure({
		username: "Gus",
		password: "gustifer"
	}),
	new userSecure({
		username: "Monica",
		password: "mon222"
	}),
	new userSecure({
		username: "Clarence",
		password: "clar66"
	}),
	new userSecure({
		username: "Billy",
		password: "either"
	})
];

//var done = 0;
//for (var i = 0; i < userSecure.length; i++) {
//	userSecure[i].save(function(err, result) {
//		done++;
//		if (done === userSecure.length) {
//			exit();
//		}
//	});
//}

//function exit() {
//	mongoose.disconnect();
//}