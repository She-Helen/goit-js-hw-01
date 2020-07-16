"use strict";
//_________Task 1___________
const name = "Генератор защитного поля";
let price = 1000;
console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
price = 2000;
console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

// //_________Task 2___________
const TOTAL = 100;
let ordered = 50;
// ordered = 20;
// ordered = 80;
// ordered = 130;

if (ordered > TOTAL) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}

//_________Task 3___________
const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let password = prompt("Введите пароль");
if (password === null) {
  message = "Отменено пользователем!";
} else if (password === "jqueryismyjam") {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);

//_________Task 4___________
let credits = 23580;
const pricePerDroid = 3000;

let order = prompt("Введите количество дроидов к заказу");
let orderQty = Number(order);
console.log(orderQty);
console.log(typeof orderQty);

let totalPrice = pricePerDroid * orderQty;
console.log(totalPrice);

if (order === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  credits = credits - totalPrice;
  console.log(
    `Вы купили ${orderQty} дроидов, на счету осталось ${credits} кредитов.`
  );
}
//_________Task 5___________
let country = prompt("Пожалуйста, введите название страны");
country = country.toUpperCase();
let deliveryPrice = 0;

switch (country) {
  case "КИТАЙ":
    deliveryPrice = 100;
    break;

  case "ЧИЛИ":
    deliveryPrice = 250;
    break;

  case "АВСТРАЛИЯ":
    deliveryPrice = 170;
    break;
  case "ИНДИЯ":
    deliveryPrice = 80;
    break;

  case "ЯМАЙКА":
    deliveryPrice = 120;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
if (deliveryPrice <= 0) {
} else {
  alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
}

//_________Task 6___________
let input;
let total = 0;

while (true) {
  input = prompt("Введите число, которое нужно сложить");
  if (input === null) {
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  console.log(input);
  total += input;
  console.log(`total = ${total}`);
}

alert(`Общая сумма чисел равна ${total}`);
