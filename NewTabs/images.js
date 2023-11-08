"use strict";

window.onload = init;

function init(){
    let imageGroups = document.getElementsByClassName("imageGroup");

    Array.from(imageGroups).forEach(function(element){
        element.style.border = "5px red"; 
    })
}

let noAltImages = document.querySelectorAll("img:not([alt])");

Array.from(noAltImages).forEach(function(element){
    element.alt= "graffiti image";
});