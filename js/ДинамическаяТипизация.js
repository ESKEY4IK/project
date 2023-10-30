"use strict";

// To String

// 1)
console.log(typeof (String(null))); // string
console.log(typeof (String(4))); // string

// 2)
console.log(typeof (5 + "")); // string

const num = 5;

console.log("https://vk.com/catalog/" + num); // https://vk.com/catalog/5

const fontSize = 26 + "px";

console.log(fontSize); // 26px


// To Number

// 1)
console.log(typeof (Number("4"))); // number

// 2)
console.log(typeof (+"4")); // number

// 3)
console.log(typeof (parseInt("15px", 10))); // number

// eslint-disable-next-line no-unused-vars
let answer = +prompt("Hello", "");


// To Boolean


// 1)
0, "", null, undefined, NaN; // false

let switcher = null;

if (switcher) {
    console.log("Working...");
}

// 2)
console.log(typeof (Boolean)("4")); // boolean

// 3)
console.log(typeof (!!"44444")); // boolean