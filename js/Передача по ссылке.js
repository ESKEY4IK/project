"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // Кладётся ссылка на уже существующий объект

copy.a = 10;
console.log(copy); // { a: 10, b: 1 }
console.log(obj); // { a: 10, b: 1 }

function copy1(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy1(numbers);

// Поверхностная копия объектов
newNumbers.a = 10;
console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers); // { a: 2, b: 5, c: { x: 7, y: 4 } }

// Глубокая копия объектов
newNumbers.c.x = 10;
console.log(newNumbers); // { a: 10, b: 5, c: { x: 10, y: 4 } } 
console.log(numbers); // { a: 2, b: 5, c: { x: 10, y: 4 } }

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // Копирование add в numbers

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();
newArray[1] = "sdfwsdfsafd";

console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "facebook"]; // Оператор разворота

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // Копирование num в аргументы функции log

const array = ["a", "b"];

const newArray1 = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = { ...q };


console.log(newArray1);
console.log(newObj);