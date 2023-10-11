"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function () {
        console.log("Test");
    }
};

console.log(options.name); // test

// Вызов значения ключа объекта в объекте
console.log(options["colors"]["border"]); // black

// Удаление ключа из объекта
delete options.name;

console.log(options);

let counter = 0;
// Перебор ключей объектов и вывод их значений
for (let key in options) {
    if (typeof (options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);

// Массив с ключами объекта
console.log(Object.keys(options));

// Количество ключей в объекте
console.log(Object.keys(options).length);

options.makeTest();


// Деструктуризация объекта
const { border, bg } = options.colors;
console.log(border);