
var express = require("express");
var request = require('request')
var router = express.Router();
var UserSecure = require("../models/userSecure.js");
var Funders = require("../models/funders.js");
var FundingProjects = require("../models/fundingProjects.js");

var fakeProjects = require("../seed/fakeProjects-seeder.js");

router.get("/", function(req, res) {
	res.render("index");
// 	console.log("Made the main page get");
});

router.get("/try", function(req, res) {
	res.send("Made the page");
 	console.log("Made the try page get");
});

router.get("/projects", function(req, res) {
	FundingProjects.find(function(req, res) {
	}).then(function(fprojects) {
		console.log(fprojects);
		res.render("index", fprojects);
 		console.log("Made the projects page get");		
	});
});

router.get("/funders", function(req, res) {
	UserSecure.find(function(req, res) {
	}).then(function(uname) {
		console.log(uname);
		res.render("index", uname);
 		console.log("Made the funders page get");		
	});
});

//router.get("/projects", function(req, res) {
//	console.log(fakeProjects);
//	res.render("index", fakeProjects);
// 	console.log("Made the project page get");
//});

module.exports = router;