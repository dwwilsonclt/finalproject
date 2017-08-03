var fundingProjects = require("../models/fundingProjects.js");
var mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/hashTagFund");

var fundingProjects = [
	new fundingProjects({
		project_title: "Accordion",
		project_description: "I want to learn how to play the accordion so I can play at Italian weddings.",
		image_link: "assets/img/Accordion.png",
		funding: 0
	}),
	new fundingProjects({	
		project_title: "CellPhone",
		project_description: "I need a cell phone so I can keep in contact with my family overseas.",
		image_link: "assets/img/CellPhone.png",
		funding: 0
	}),	
	new fundingProjects({
		project_title: "Idea",
		project_description: "I have a great idea that I need funding for.",
		image_link: "assets/img/Idea.png",
		funding: 0
	}),	
	new fundingProjects({	
		project_title: "Laptop",
		project_description: "I need a laptop for school.",
		image_link: "assets/img/Laptop.png",
		funding: 0
	}),	
	new fundingProjects({
		project_title: "MachingBand",
		project_description: "the marching band I belong to was invited to the Thanksgiving Day parade this year and we need funding to get there.",
		image_link: "assets/img/MarchingBand.png",
		funding: 0
	}),	
	new fundingProjects({
		project_title: "SummerCamp",
		project_description: "I need help paying for me to go to summer camp in the mountains this year.",
		image_link: "assets/img/SummerCamp.png",
		funding: 0
	})
];

var done = 0;
for (var i = 0; i < fundingProjects.length; i++) {
	fundingProjects[i].save(function(err, result) {
		done++;
		if (done === fundingProjects.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}