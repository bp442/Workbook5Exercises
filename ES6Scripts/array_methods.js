"use strict";

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];
//A. and C.
function listItems(listCart) {
    return listCart.item;
}

let itemList = cart.map(listItems);

itemList.sort();

itemList.forEach(displayList);

function displayList(list){
    console.log(list);
}

//B.
function getCost(currentTotal, value){
   return currentTotal + (value.price * value.quantity);
}

let totalCost = cart.reduce(getCost, 0);
console.log("$" + totalCost);

