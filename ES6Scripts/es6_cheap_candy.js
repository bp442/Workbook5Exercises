"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Fishcakes", price: 1.49 },
    { product: "Peach Rings", price: 4.99 },
    { product: "Gumballs", price: 0.50 },
    { product: "Slim Jim", price: 1.75 },
];

//1
let cheapCandies = products.filter((items) => {
    if(items.price < 4){
        return true;
    }
    else return false;

});

console.log("Cheap products are: ");
for(let candies of cheapCandies){
   console.log(candies.product);
}

//2
let mnmCandies = products.filter((items) => {
    if(items.product.substring(items.product.indexOf(" ")+ 1) == "M&Ms"){
        return true;
    }
    else return false;
});

console.log("M&M Products are: ");
for(let mnm of mnmCandies){
    console.log(mnm.product);
}

let swedishFish = products.find((items) => {
    if(items.product == "Swedish Fish"){
        return true;
    }
    else return false;
});

if(swedishFish != null){
    console.log("We have Swedish Fish");
}
else{
    console.log("We do not have Swedish Fish");
}