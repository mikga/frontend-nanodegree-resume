/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name : "Mik",
	role : "Web Designer/Developer",
	contacts : {
		mobile: "+44-1111-111-111",
		email:  "mik@example.com",
		github: "https://github.com/mikga",
		twitter: "@example",
		location: "London, UK"
	},
	welcomeMessage: "Welcome to my online résumé",
	skills: ["Skill 1", "Skill 2", "Skill 3"],
	biopic: "http://placehold.it/200x200",
	displayContact: function(id){
		var div = $(id);
		div.append(HTMLmobile.replace("%data%", this.contacts.mobile));
		div.append(HTMLemail.replace("%data%", this.contacts.email));
		div.append(HTMLgithub.replace("%data%", this.contacts.github));
		div.append(HTMLtwitter.replace("%data%", this.contacts.twitter));
		div.append(HTMLlocation.replace("%data%", this.contacts.location));
	},
	display: function(){
		var header = $("#header");

		// Header
		header.prepend(HTMLheaderRole.replace("%data%", this.role));
		header.prepend(HTMLheaderName.replace("%data%", this.name));

		// Top Contacts
		this.displayContact("#topContacts");

		// Bio Pic
		header.append(HTMLbioPic.replace("%data%", this.biopic));

		// Welcome message
		header.append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

		// Skills
		header.append(HTMLskillsStart);
		var skills = $("#skills");
		for (var i = 0; i < this.skills.length; i++) {
			skills.append(HTMLskills.replace("%data%", this.skills[i]));
		}
	},

};

var education = {
	schools: [
		{
			name: "School 1",
			location: "Tokyo, Japan",
			degree: "Degree",
			majors: ["Major 1", "Major 2"],
			dates: 2000,
			url: "http://example.com",
		},
		{
			name: "School 2",
			location: "São Paulo, Brazil",
			degree: "Degree",
			majors: ["Major 1", "Major 2"],
			dates: 2000,
			url: "http://example.com",
		}
	],
	onlineCourses: [
		{
			title: "Online course 1",
			school: "Online school 1",
			date: 2000,
			url: "http://example.com",
		},
		{
			title: "Online course 2",
			school: "Online school 2",
			date: 2000,
			url: "http://example.com",
		}
	],
	display: function(){


		for (var i = 0; i < this.schools.length; i++){
			var school = this.schools[i];
			var div = $(HTMLschoolStart);
			div.append(HTMLschoolName.replace("%data%", school.name).replace("#", school.url) + HTMLschoolDegree.replace("%data%", school.degree));
			div.append(HTMLschoolDates.replace("%data%", school.dates));
			div.append(HTMLschoolLocation.replace("%data%", school.location));

			for (var j = 0; j < school.majors.length; j++){
				div.append(HTMLschoolMajor.replace("%data%", school.majors[j]));
			}

			$("#education").append(div);
		}

		if (this.onlineCourses.length > 0){
			$("#education").append(HTMLonlineClasses);
		}

		for (var i = 0; i < this.onlineCourses.length; i++){
			var course = this.onlineCourses[i];
			var div = $(HTMLschoolStart);
			div.append(HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url) + HTMLonlineSchool.replace("%data%", course.school));
			div.append(HTMLonlineDates.replace("%data%", course.date));
			div.append(HTMLonlineURL.replace("%data%", course.url));
			$("#education").append(div);
		}

	}
};

var work = {
	jobs: [
		{
			employer: "Employee 1",
			title: "Title 1",
			location: "New York, USA",
			dates: "January 2000 - January 20001",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt non voluptatem soluta vitae tenetur minima optio vero facilis expedita ex dolores quibusdam quos eum, consequatur ad possimus itaque. Ipsa, mollitia.",
		},
		{
			employer: "Employee 2",
			title: "Title 2",
			location: "Dubai, UAE",
			dates: "January 2001 - January 20001",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt non voluptatem soluta vitae tenetur minima optio vero facilis expedita ex dolores quibusdam quos eum, consequatur ad possimus itaque. Ipsa, mollitia.",
		}
	],
	display: function(){
		for (var i = 0; i < this.jobs.length; i++){
			var job = this.jobs[i];
			var div = $(HTMLworkStart);
			div.append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
			div.append(HTMLworkDates.replace("%data%", job.dates));
			div.append(HTMLworkLocation.replace("%data%", job.location));
			div.append(HTMLworkDescription.replace("%data%", job.description));
			$("#workExperience").append(div);
		}
	}
};

var projects = {
	projects: [
		{
			title: "Project Title 1",
			dates: "January 2000 - January 20001",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt non voluptatem soluta vitae tenetur minima optio vero facilis expedita ex dolores quibusdam quos eum, consequatur ad possimus itaque. Ipsa, mollitia.",
			images: [
				"http://placehold.it/300x200",
				"http://placehold.it/300x200"
			]
		},
		{
			title: "Project Title 2",
			dates: "January 2001 - January 20002",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt non voluptatem soluta vitae tenetur minima optio vero facilis expedita ex dolores quibusdam quos eum, consequatur ad possimus itaque. Ipsa, mollitia.",
			images: [
				"http://placehold.it/300x200",
				"http://placehold.it/300x200"
			]
		}
	],
	display: function(){
		for (var i = 0; i < this.projects.length; i++){
			var project = this.projects[i];
			var div = $(HTMLprojectStart);
			div.append(HTMLprojectTitle.replace("%data%", project.title));
			div.append(HTMLprojectDates.replace("%data%", project.dates));
			div.append(HTMLprojectDescription.replace("%data%", project.description));

			for (var j = 0; j < project.images.length; j++){
				div.append(HTMLprojectImage.replace("%data%", project.images[j]));
			}

			$("#projects").append(div);
		}
	}
};

// Update the main HTML document
$(function(){

	// Header
	bio.display();

	// Work experience
	work.display();

	// Projects
	projects.display();

	// Education
	education.display();

	// Footer Contacts
	bio.displayContact("#footerContacts");

	// Map
	$("#mapDiv").append("<div id='map'></div>");

});


