"use strict";

let number = 5;

function logNumber() {
    let number = 4;
    console.log(number);
}

number = 6;

logNumber(); // 4

let number1 = 5;

function logNumber1() {
    console.log(number1);
}

number1 = 6;

logNumber1(); // 6


function createCounter() {
    let counter = 0;

    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3); // 1 2 3

