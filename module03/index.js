"use strict";
/*Задание 1*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy"; // добавляет поле mood со значением 'happy'
// user.hobby = "skydiving"; // заменяет значение hobby на 'skydiving'
// user.premium = false; // заменяет значение premium на false
// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`); // выводит содержимое объекта user в формате ключ: значение используя Object.keys() и for...of
// }

/*Задание 2*/
//Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
// const countProps = function (obj) {
//   return Object.values(obj).length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

/*Задание 3*/
//Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
//Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач"

// const findBestEmployee = function (employees) {
//   for (let key in employees) {
//     if (Math.max(...Object.values(employees)) === employees[key]) {
//       return key;
//     }
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

/*Задание 4*/
//Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
//Функция считает общую сумму запрплаты работников и возращает ее.
//Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   let sum = 0;
//   for (const elem of Object.values(employees)) {
//     sum += elem;
//   }
//   return sum;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

/*Задание 5*/
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// /*
// * Функция получает массив объектов и имя свойства.
// * Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// */
// const getAllPropValues = function (arr, prop) {
//   let arrProp = [];
//   for (let obj of arr) {
//     if (obj[prop] !== undefined) {
//       arrProp.push(obj[prop]);
//     }
//   }
//   return arrProp;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []

// /*Задание 6*/

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// /*
//  * Функция получает массив объектов и имя продукта (значение свойства name).
//  * Возвращает общую стоимость продукта (цена * количество).
//  */

// const calculateTotalPrice = function (allProdcuts, productName) {
//   for (let product of allProdcuts) {
//     if (product["name"] === productName) {
//       return product["price"] * product["quantity"];
//     }
//   }
//   return "Такого товара нет!";
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

// /* Задание 7*/
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return this.transactions.push({
//       amount: amount,
//       type: type,
//       id: "" + this.transactions.length + 1,
//     });
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     return this.createTransaction(amount, Transaction.DEPOSIT);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     this.balance -= amount;
//     return this.createTransaction(amount, Transaction.WITHDRAW);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//       return "nonono";
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let summ = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         summ += transaction.amount;
//       }
//     }
//     return summ;
//   },
// };

// account.deposit(5000);
// account.withdraw(100);
// console.log("DEPOSIT=", account.getTransactionTotal(Transaction.DEPOSIT));
// console.log("WITHDRAW=", account.getTransactionTotal(Transaction.WITHDRAW));
// console.log("Проверяю баланс", account.getBalance());
// console.log("Проверяю массив транзакций", account.transactions);
// console.log("Ищу по id", account.getTransactionDetails("01"));
