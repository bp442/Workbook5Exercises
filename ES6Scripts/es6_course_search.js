"use strict";
let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

console.log("The Prog200 course start date: " + courses.find(findProg200).StartDate);

function findProg200(course) {
    if (course.CourseId == "PROG200") {
        return true;
    }
    else {
        return false;
    }
}

console.log("The PROJ500 course's title is : " + courses.find(titleProj500).Title);

function titleProj500(course){
    if (course.CourseId == "PROJ500"){
        return true;
    }
    else{
    return false;
    }
}

let cheapCourses = courses.filter(findCheapCourses);
console.log("The classes that cost $50 or less are: ");

for(let i of cheapCourses){
    console.log(i.Title);
}
function findCheapCourses(course){
    if (course.Fee <= 50){
        return true;
    }
    else{
        return false;
    }
}

let classroom1Classes = courses.filter(findClassroom1);
console.log("The classes that meet in Classroom 1 are:");

for(let y of classroom1Classes){
    console.log(y.Title);
}
function findClassroom1(course){
    if(course.Location == "Classroom 1"){
        return true;
    }
    else{
        return false;
    }
}