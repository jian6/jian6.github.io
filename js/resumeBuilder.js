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
           "Experience with Java, including Java SE, JavaFX, Swing, Junit, Jsoup",
           "Experience with client side programming in HTML, CSS and Javascript",
           "Experience with server side programming in PHP, Python and Node.js",
           "Experience with software engineering practices, such as data structures and design patterns",
           "Experience with testing methods, including automated testing in Selenium",
           "Knowledge of container management tools, such as Docker"

]



var bio = {
  "name": "Jian Liu",
  "role": "Passionate Coder / Programming Student ",
  "contacts": contactInfo,
  "picture": "images/fry.jpg",
  "welcomeMsg": "Welcome to My Resume Page",
  "skills": skills
};

var work = {
  "jobs":
  [
    {"position": "Web Developer",
    "employer": "IBZ China",
    "years": "2014",
    "location": "Work in Distance",
    "description": "IBZ is the official language training center of the University of Duisburg-Essen. I participated in the "+
                  "development of the website of one of their branches in China using HTML, CSS and Javascript. I was also " +
                  "in charge of updating and maintaining the contents of the website."
    },
    {"position": "Business Development Associate",
    "employer": "Leno Media Group",
    "years": "2010-2012",
    "location": "Chengdu, China",
    "description": "I was responsible for client relations and new business opportunities explorations. I also wrote marketing plans "+
                   "for the new opportunites. Furthermore, I planned and oversaw events and conferences for our clients."
    },
    {"position": "eCommerce Specialist",
    "employer": "Crystal Techonology",
    "years": "2007-2010",
    "location": "Chengdu, China",
    "description": "I was in charge of the company's e-business affairs, including maintainance of the sales website, communite with "+
                   "foreign clients as well as attract new clients on our e-commerce platforms. I also work with Web developers to ensure "+
                   "our sales platform are user friendly and comply with company's requirements."
    }
  ]
};
var education = {
  "schools":
  [
    {"school": "Algonquin College",
    "degree": "Diploma",
    "major": "Computer Programmers, CO-OP",
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
    {"title": "A small board game ",
     "dates": "XXXX1",
     "description": "XXXX1" ,
     "image":["images/fry.jpg"]
    },
    {"title": "XXXX2",
     "dates": "XXXX2",
     "description": "XXXX2" ,
     "image": ["images/fry.jpg"]
    }
  ]
};

var formattedName = HTMLheaderName.replace ("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
var fromattedPic = HTMLbioPic.replace ("%data%", bio.picture);
var fromattedWelMsg = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMsg);

//header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(fromattedPic);
$("#header").append(fromattedWelMsg);
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
      if (project.projects[item].image.length > 0){
        for (pic in project.projects[item].image ){
            var formmattedProPic =  HTMLprojectImage.replace("%data%", project.projects[item].image[pic]);
        }
      }
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formmttedProTit);
      $(".project-entry:last").append(formmatedProDates);
      $(".project-entry:last").append(formmattedProDes);
      $(".project-entry:last").append(formmattedProPic);
  };
}
project.display();

$("#mapDiv").append(googleMap);
