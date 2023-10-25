"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof str); // string
console.log(typeof strObj); // object

console.dir([1, 2, 3]);



const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

// Создание прототипа
const john = Object.create(soldier);

john.sayHello(); // Hello