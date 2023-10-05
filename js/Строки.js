"use strict";

const str = "test";
const arr = [1, 2, 3];

console.log(str[2]);

console.log(str.toUpperCase());


const fruit = "Some fruits";

console.log(fruit.indexOf("fruit")); // 5
console.log(fruit.indexOf("q")); // -1


const log = "Hello World";
console.log(log.slice(6, 11)); // World
console.log(log.slice(-5, -1)); // Worl
console.log(log.substring(6, 11)); // World
console.log(log.substr(6, 5)); // World

const num = 12.2;
console.log(Math.round(num)); // 12

const test = "12.2px";
console.log(parseInt(test)); // 12
console.log(parseFloat(test)); // 12.2

