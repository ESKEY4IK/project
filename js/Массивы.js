"use strict";

const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

console.log(arr.length); // Длина массива = индекс элемента + 1

// Удаление последнего элемента массива
arr.pop();

// Добавление элемента в конец массива
arr.push(10);

console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} inside the array ${arr}`);
}); // 0: 1 inside the array 1,2,3,6,10
// 1: 2 inside the array 1,2,3,6,10
// 2: 3 inside the array 1,2,3,6,10
// 3: 6 inside the array 1,2,3,6,10
// 4: 10 inside the array 1,2,3,6,10

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const arr1 = [2, 3, 6, 8, 10];
arr1[99] = 0;
console.log(arr1.length); // 100
console.log(arr1); // [ 2, 3, 6, 8, 10, <94 empty items>, 0 ]

const str = prompt("", "");
const products = str.split(", "); // Превращает строку в массив, , - разделитель
products.sort(); // Сортировка массива. Если не передать функцию сравнения - сортирует элементы как строки.
console.log(products.join("; ")); // Превращает массив в строку, s - разделитель