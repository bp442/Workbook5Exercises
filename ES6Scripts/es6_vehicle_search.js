"use strict";

//added names to each vehicle so that I can point to individual vehicles for each prompt
let vehicles = [
    {
        name: "Sally",
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        name: "Bob",
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        name: "Daniel",
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        name: "Angelica",
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        name: "Monica",
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        name: "Eliza",
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        name: "Jordan",
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
    },
    {
        name: "Michael",
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

//1.
let redVehicles = vehicles.filter((entries) =>
{
    if(entries.color == "Red"){
        return true;
    }
    else return false;
});

console.log("The vehicles that are red are: ");

for (let i of redVehicles){
    console.log(i.name);
}

//2.
let expiredReg = vehicles.filter((entries) =>
{
    if(entries.registrationExpires < new Date()){
        return true;
    }
    else return false;
});

console.log("The vehicles that have expired registrations belong to: ");

for(let y of expiredReg){
    console.log(y.name);
}

//3.
let sixPplCap = vehicles.filter((entries) =>
{
    if(entries.capacity >= 6){
        return true;
    }
    else return false;
});

console.log("The vehicles that can hold more than 6 people belong to: ");

for (let x of sixPplCap){
    console.log(x.name);
}

//4
let licenseNum222 = vehicles.filter((entries) =>
{
    if(entries.licenseNo.substring(entries.licenseNo.length - 3) == "222"){
        return true;
    }
    else return false;
});

console.log("The vehicles that have a license plate ending in \"222\" belong to: ");

for(let a of licenseNum222){
    console.log(a.name);
}