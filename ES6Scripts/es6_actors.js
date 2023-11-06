"use strict";

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

//1.
let member187 = academyMembers.find((actors) => {
    if (actors.memID == 187) {
        return true;
    }
    else return false;
});

console.log("Member 187 is: " + member187.name);

//2
let tripleFilmActors = academyMembers.filter((actors) =>{
    if(actors.films.length > 2){
        return true;
    }
    else return false;
});

console.log("The actors with more than 3 films are: ");

for(let actors of tripleFilmActors){
    console.log(actors.name);
}

//3
let bobActors = academyMembers.filter((actors) =>
{
    if(actors.name.substring(0, 3) == "Bob"){
        return true;
    }
    else return false;
});

console.log("The actors whose names start with \"Bob\" are: ");
for(let actors of bobActors){
    console.log(actors.name);
}

//4
let filmsA = academyMembers.filter((actors) =>
{
    for(let curFilm of actors.films){
        if(curFilm.substring(0, 1) == "A"){
            return true;
        }
    }
});

console.log("The members that have been in a film that starts with \"A\" are :");

for(let num of filmsA){
    console.log(num.name);
}