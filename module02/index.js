"use strict";
/*Задание 1*/
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     console.log(`${i + 1} - ${item}`);
//   }
// };

// /*Вызовы функции для проверки работоспособности твоей реализации.*/
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

/*Задание 2 */
// const calculateEngravingPrice = function (message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

/*Задание 3 */
/* Вариант 1 */
// const findLongestWord = function (string) {
//   let stringArr = string.split(" ");
//   let longesWord = "";
//   for (let i = 0; i < stringArr.length; i++) {
//     if (longesWord === "") {
//       longesWord = stringArr[i];
//     } else if (longesWord.length < stringArr[i].length) {
//       longesWord = stringArr[i];
//     }
//   }
//   return longesWord;
// };
/* Вариант 2 */
// const findLongestWord = function (string) {
//   let words = string.split(" ");
//   let lengthArr = [];
//   for (let word of words) {
//     lengthArr.push(word.length);
//   }
//   const i = lengthArr.indexOf(Math.max(...lengthArr));
//   return words[i];
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
// console.log(findLongestWord("Google do a roll")); // 'Google'
// console.log(findLongestWord("May the force be with you")); // 'force'

/*Задание 4 */

// const formatString = function (string) {
//   let stringArr = string.split("");
//   // console.log("Это массив символов строки", stringArr);
//   if (stringArr.length > 40) {
//     stringArr.splice(40);
//     stringArr.push("...");
//     return stringArr.join("");
//   }
//   return string;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien.")); // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// ); // вернется форматированная строка

/*Задание 5 */
/*Вариант 1 - если искомые "spam" и "sale" будут частью слов, функция вернет true  */
// const checkForSpam = function (message) {
//   message = message.toLowerCase();
//   return message.includes("spam") || message.includes("sale");
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
// console.log(checkForSpam("Best 17 Sales Articles of 2017")); // true - мой вариант

/*Вариант 2 */

// const checkForSpam = function (message) {
//   message = message.toLowerCase();
//   message = message.replace(/[\.[,:?!@'"-]+/g, " ");
//   message = message.replace(/]/g, " "); //не смогла за один раз избавиться от всех спецсимволов
//   let messageArr = message.split(" ");
//   console.log(messageArr);

//   return messageArr.includes("spam") || messageArr.includes("sale");
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("[SPAM.] How to earn fast money?")); // true
// console.log(checkForSpam("Best 17 Sales Articles of 2017")); // false - мой вариант

/*Задание 6 */

// let input;
// const numbers = [];
// let total = 0;

// while (input !== null) {
//   input = prompt("Введите число, которое нужно сложить");
//   if (Number.isNaN(+input)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else if (!Number.isNaN(+input) && input !== null) {
//     numbers.push(+input);
//   }
// }
// for (const number of numbers) {
//   total += number;
// }
// console.log(`Введенные числа: ${numbers}`);
// console.log(`Общая сумма чисел равна ${total}`);
