
var express = require("express");
var request = require("request");
var exphbs = require("express-handlebars");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.Promise = Promise;

var app = express();
var router = express.Router();
var port = 5500;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname ,"public")));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname ,"views"));

mongoose.connect("mongodb://localhost/hashTagFund");
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("openUri", function() {
  console.log("Mongoose connection successful.");
});

var routes = require("./controllers/hashTagFund-controller.js")

app.use("/", routes);
app.use("/projects", routes);
app.use("/funders", routes);
app.use("/try", routes);

app.listen(port, function() {
  console.log("App is listening on PORT " + port);
});
