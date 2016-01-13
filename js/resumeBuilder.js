/*
This is empty on purpose! Your code to build the resume will go here.
 */
var contactInfo = {
  "email": "liujian81@gmail.com",
  "phone": "613-263-8768",
  "github": '<a id ="link" href="https://github.com/jian6">jian6</a>',
  "location": "Ottawa, Ontario, Canada"
};
var skills = [
           "Java      : JavaSE, JavaFX, Swing, Jsoup, Junit",
           "Web       : HTML, CSS, Bootstrap, Javascript, jQuery, Python(Flask), Node.js, PHP",
           "Framework : FLASK, Express.js",
           "Data      : SQL, MySQL, SQL Server, Oracle, Mongodb, ORM",
           "API       : JSON, XML, Restful",
           "Knowledge : Data Structures, OOP Concepts, Computer Networks",

]



var bio = {
  "name": "Jian Liu",
  "role": "Passionate Coder / Programming Student ",
  "contacts": contactInfo,
  "picture": "images/me.jpg",
  "welcomeMsg": "Hardworking, Reliable, Efficient Learner",
  "skills": skills
};

var work = {
  "jobs":
  [
    {"position": "Web Developer",
    "employer": "IBZ Chengdu",
    "years": "Aug, 2014 - Jan, 2015",
    "location": "Work in Distance",
    "description": "IBZ is the official language training center of the University of Duisburg-Essen.<br>I participated in the "+
                  "development of the website of one of their branches in China using HTML, CSS and Javascript.<br>I was also " +
                  "in charge of updating and maintaining the contents of the website."
    },
    {"position": "Software Developer",
    "employer": "IBZ Chengdu",
    "years": "Jun, 2014",
    "location": "Chengdu, China",
    "description": "Developed a courier-tracking system for the school’s administration, using node.js, express.js and mongodb.<br>"+
                   "Implemented a secured API for show/create/edit of package infomation using express.js.<br>"+
                   "Implemented the server-side routing and middleware using express.js and http request.<br>"+
                   "Implemented data persistence using Mongodb and its ODM mongoose.<br>"+
                   "Parsed JSON from an external courier status API."
    },
    {"position": "Business Development Associate",
    "employer": "Leno Media Group",
    "years": "Jun, 2010 - Jan, 2012",
    "location": "Chengdu, China",
    "description": "I was responsible for client relations and new business opportunities explorations. I also wrote marketing plans "+
                   "for the new opportunites. Furthermore, I planned and oversaw events and conferences for our clients.<br>"+
                   "Collaborated with 2 other team members to complete several large-scale events from scratch,<br> "+
                   "which generated several million Chinese Yuan’s profits."

    },
    {"position": "eCommerce Specialist",
    "employer": "Crystal Techonology",
    "years": "Sep, 2007 - Apr, 2010",
    "location": "Chengdu, China",
    "description": "Managed the company’s e-commerce affairs, including customizing the sales platform using HTML and CSS, "+
                   "its maintenance and update, and boosting company’s internet presence in order to attract new customers.<br>"+
                   "Analyzed the company’s requirement for sales platform, and worked with developers from Alibaba to implement it.<br>"+
                   "Successfully attracted several overseas clients by using the newly designed sales platform."
    }
  ]
};
var education = {
  "schools":
  [
    {"school": "Algonquin College",
    "degree": "Diploma",
    "major": "Computer Programmer, CO-OP",
    "years": "Sep. 2015 - Present",
    "url": "http://www.algonquincollege.ca",
    "location": "Ottawa, Ontario, Canada"
    },
    {"school": "Concordia University",
    "degree": "Bachelor of Computer Science",
    "major": ["Information System"],
    "years": "Sep. 2012 - May 2015",
    "url": "http://www.concordia.ca",
    "location": "Montreal, Quebec, Canada"
    }
  ]
};
var project = {
  "projects":
  [
    {"title": "Microblog Application",
     "dates": "2015",
     "description": "Written in Python with FLASK and SQLAlchemy.<br>"+
                    "Developed the backend of the application using Python and its Flask framework.<br>"+
                    "Developed the frontend of the application using HTML, Bootstrap, Javascript.<br>"+
                    "Implemented the database using ORM (SQLAlchemy) and SQLite.<br>"+
                    "Implemented the functionalities of user authentication, login/logout, internationalization, and etc." ,
     "image":["images/bloghome.png", "images/bloglogin.png", "images/profile.png", "images/edit.png"]
    },
    {"title": "Restaurant Information Restful API",
     "dates": "2015",
     "description": "Written in Python, using Foursquare API, GoogleMap API.<br>"+
                    "Built a Restful API in Python that searches restaurants information based on given location and restaurant type.<br>"+
                    "Parsed JSON result from GoogleMap API and foursquare API.<br>"+
                    "Implemented Restful functionalities for GET/POST/PUT/DELETE using Flask framework." ,
     "image": []
     },
     {"title": "Restaurant Homepage",
      "dates": "2015",
      "description": "Written in HTML and PHP. Database: MYSQL. <br>"+
                     "Developed the feature of customer registrations by using their names, emails and etc.<br>"+
                     "Developed the login function by verify username and password from database.<br>"+
                     "Implemented database to store customer information and administrator information." ,
      "image": ["images/home.png", "images/contact.png", "images/login.png", "images/list.png"]
     }
  ]
};

var formattedName = HTMLheaderName.replace ("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
var fromattedPic = HTMLbioPic.replace ("%data%", bio.picture);
//var fromattedWelMsg = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMsg);

//header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(fromattedPic);
//$("#header").append(fromattedWelMsg);
$("#header").append(HTMLskillsStart);
for (item in skills){
  var formmatedSkill = HTMLskills.replace("%data%", skills[item]);
  $("#skills").append(formmatedSkill);
};

//contact information
var formattedContacts = [];
var fomattedMobile = HTMLmobile.replace("%data%", contactInfo.phone);
var formattedEmail = HTMLemail.replace("%data%", contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", contactInfo.github);
var formmatedLocation = HTMLlocation.replace("%data%", contactInfo.location);
formattedContacts.push(fomattedMobile);
formattedContacts.push(formattedEmail);
formattedContacts.push(formattedGithub);
formattedContacts.push(formmatedLocation);
for (item in formattedContacts){
  $("#topContacts").append(formattedContacts[item]);
  $("#footerContacts").append(formattedContacts[item]);
};

function displaywork(){
  for (i=0; i<work.jobs.length; i++){
      var formmattedWorkEmp = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formmatedWorkTit = HTMLworkTitle.replace("%data%", work.jobs[i].position);
      var formattedEmpTit = formmattedWorkEmp +  formmatedWorkTit;
      var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[i].years);
      var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedWorkDes = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedEmpTit);
      $(".work-entry:last").append(formattedWorkDate);
      $(".work-entry:last").append(formattedWorkLoc);
      $(".work-entry:last").append(formattedWorkDes);
  };
};

displaywork();

education.display=function() {
  for (school in education.schools){
      var formmattedSchTit = HTMLschoolName.replace("%data%", education.schools[school].school);
      var formmattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree)
      var formmatedSchDgr = formmattedSchTit + formmattedDegree;
      var formmattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
      var formmattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formmattedschMaj = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formmatedSchDgr);
      $(".education-entry:last").append(formmattedSchDates);
      $(".education-entry:last").append(formmattedschMaj);
      $(".education-entry:last").append(formmattedSchLoc);
  };
}
education.display();


$(document).click(function(loc){
   logClicks(loc.clientX, loc.clientY);
});

function locationizer(work_obj){
  var workLocations = [];
  for (i=0; i<work.works.length; i++){
    workLocations.push(work.works[i].city);
  }
  return workLocations;
}


  function isName(){
    var nameArr = bio.name.split(" ");
    var fullName = nameArr[0] +" "+ nameArr[1].toUpperCase();
    return fullName;
  }
//  $("#main").append(internationalizeButton);

project.display=function() {
  for (item in project.projects){
      var formmttedProTit = HTMLprojectTitle.replace("%data%", project.projects[item].title);
      var formmatedProDates = HTMLprojectDates.replace("%data%", project.projects[item].dates);
      var formmattedProDes = HTMLprojectDescription.replace("%data%", project.projects[item].description);
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formmttedProTit);
      $(".project-entry:last").append(formmatedProDates);
      $(".project-entry:last").append(formmattedProDes);
      if (project.projects[item].image.length > 0){
        for (pic in project.projects[item].image ){
            var formmattedProPic =  HTMLprojectImage.replace("%data%", project.projects[item].image[pic]);
            $(".project-entry:last").append(formmattedProPic);
        }
      }
  };
}
project.display();

$("#mapDiv").append(googleMap);
