/* eslint-disable no-constant-condition */
"use strict";


if (4 == 9) {
    console.log("OK!");
} else {
    console.log("Error!");
}



if (num < 49) {
    console.log("Error!");
} else if (num > 100) {
    console.log("Too much!");
} else {
    console.log("Ok!");
}

// Ternary argument
// (num === 50) ? console.log("Ok!") : console.log("Error!");


const num = 50;

//switch
switch (num) {
    case 49:
        console.log("Incorrect!");
        break;
    case 100:
        console.log("Incorrect!");
        break;
    case 51:
        console.log("Incorrect!");
        break;
    default:
        console.log("Not now!");
        break;
}