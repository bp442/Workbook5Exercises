"use strict";

let menu = [
    [
        { item: "Sausage and Egg Biscuit", price: 3.69 },
        { item: "Bacon and Egg Biscuit", price: 3.49 },
        { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
    [
        { item: "Spaghetti with Meatballs", price: 8.89 },
        { item: "Milanese Pizza", price: 12.55 },
        { item: "Noodles with Black Bean Sauce", price: 9.55 },
        { item: "Rice Bowl with Pork", price: 11.25 }
    ],
    [
        { item: "Mapo Tofu", price: 14.49 },
        { item: "T-Bone Steak", price: 16.55 },
        { item: "Sushi Platter", price: 18.55 },
        { item: "Ikazuchi Ramen", price: 17.25 },
        { item: "Suspicious Pie", price: 99.99 }
    ]
];

let meal = 2;

switch (meal) {
    case 0: {
        console.log("Breakfast Menu");
        console.log("-------------------------------------------");
        menu[0].forEach(displayMeals);
        break;
    };
    case 1: {
        console.log("Lunch Menu");
        console.log("-------------------------------------------");
        menu[1].forEach(displayMeals);
        break;
    };
    case 2: {
        console.log("Dinner Menu");
        console.log("-------------------------------------------");
        menu[2].forEach(displayMeals);
        break;
    };
}

function displayMeals(item) {
    console.log(item);
}