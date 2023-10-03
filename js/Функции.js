"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Function expression
const logger = function () {
    console.log("Hello");
};

logger();

// Arrow function
const calc = (a, b) => {
    console.log(a);
    return a + b;
};


const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
    return undefined;
}

promotion(convert(500, usdCurr));

convert(500, usdCurr);
convert(500, eurCurr);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log("Done");
}

test();


function doNothing() { };
console.log(doNothing() === undefined);


function getMathResult(number, iterator) {
    if (typeof (iterator) !== "number" || iterator <= 0) {
        return number;
    }

    let str = "";

    for (let i = 1; i <= iterator; i++) {
        if (i === iterator) {
            str += `${number * i}`;
        } else {
            str += `${number * i}---`;
        }
    }

    return str;
}

console.log(getMathResult(5, 3));