/* Задание 1 */
const categoriesRef = document.querySelectorAll("#categories li.item");

console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});

/* Задание 2 */
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsRef = document.querySelector("ul#ingredients");
const items = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});
ingredientsRef.append(...items);

// /* Задание 3 */
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryRef = document.querySelector("#gallery");

// /* Задаие 3 Решение 1 - как сказал Александр Репета*/
// const galaryImages = images.map((image) => {
//   const cardRef = document.createElement("li");
//   const imgRef = document.createElement("img");
//   cardRef.appendChild(imgRef);
//   imgRef.setAttribute("src", image.url);
//   imgRef.setAttribute("alt", image.alt);
//   cardRef.classList.add("gallery-item");
//   return cardRef;
// });

// galleryRef.append(...galaryImages);

/* Задаие 3 Решение 2 - как написано в условии */
const galaryImages = images.map((image) => {
  return `<li class="gallery-item"><img src=${image.url} alt=${image.alt}></li>`;
});

galleryRef.insertAdjacentHTML("beforeend", galaryImages.join(" "));

/* Задание 4 */
const valueRef = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const counter = function (param) {
  param === "plus" ? (counterValue += 1) : (counterValue -= 1);
};

const update = function () {
  valueRef.textContent = counterValue;
};

btnIncrement.addEventListener("click", () => {
  counter("plus");
  update();
});

btnDecrement.addEventListener("click", () => {
  counter("min");
  update();
});

// /* Задание 5 */
// const inputRef = document.querySelector("#name-input");
// const nameOutputRef = document.querySelector("#name-output");
// inputRef.addEventListener("input", (event) => {
//   event.target.value
//     ? (nameOutputRef.textContent = event.target.value)
//     : (nameOutputRef.textContent = "незнакомец");
// });

// /* Задание 6 */

// const validationInputRef = document.querySelector("#validation-input");
// validationInputRef.addEventListener("change", (event) => {
//   const dataLength = Number(event.target.getAttribute("data-length"));
//   if (event.target.value.length === dataLength) {
//     validationInputRef.classList.add("valid");
//     validationInputRef.classList.remove("invalid");
//   } else {
//     validationInputRef.classList.add("invalid");
//     validationInputRef.classList.remove("valid");
//   }
// });

/* Задание 7 */
// const fontSizeControlRef = document.querySelector("#font-size-control");
// const textRef = document.querySelector("#text");

// fontSizeControlRef.addEventListener("input", (event) => {
//   textRef.style.fontSize = `${event.target.value}px`;
// });

// /* Задание 8 */
// const boxesRef = document.querySelector("#boxes");
// const inputRef = document.querySelector("#controls > input");
// const renderRef = document.querySelector('button[data-action="render"]');
// const destroyRef = document.querySelector('button[data-action="destroy"]');

// const createBoxes = function () {
//   for (let i = 0; i < +inputRef.value; i++) {
//     let element = document.createElement("div");
//     boxesRef.append(element);
//     element.style.width = `${30 + i * 10}px`;
//     element.style.height = `${30 + i * 10}px`;
//     element.style.backgroundColor = `rgb(${Math.round(
//       Math.random() * 255
//     )},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
//   }
// };

// renderRef.addEventListener("click", createBoxes);
// destroyRef.addEventListener("click", () => {
//   boxesRef.innerHTML = "";
//   inputRef.value = "";
// });
