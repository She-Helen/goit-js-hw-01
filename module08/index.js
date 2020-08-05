import galaryItems from "./gallery-items.js";

const galaryRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".js-lightbox");
const modalImgRef = lightboxRef.querySelector(".lightbox__image");

let createdGalaryItems = "";

const createGalaryItems = function (items) {
  return items.reduce((acc, item) => {
    acc += `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
    return acc;
  }, "");
};
const addGalaryItems = function (callback) {
  galaryRef.insertAdjacentHTML("beforeend", callback);
};
const startCreateGal = () => {
  createdGalaryItems = createGalaryItems(galaryItems);
  addGalaryItems(createdGalaryItems);
};

window.addEventListener("load", startCreateGal);

const onOpenModal = (event) => {
  event.preventDefault();
  window.addEventListener("keydown", onEscPress);

  if (event.target.nodeName === "IMG") {
    modalImgRef.src = event.target.dataset.source;
    modalImgRef.alt = event.target.alt;
    lightboxRef.classList.add("is-open");
  }
};

const onCloseModal = () => {
  lightboxRef.classList.remove("is-open");
  modalImgRef.src = " ";
  window.removeEventListener("keydown", onEscPress);
};

const onEscPress = (event) => {
  if (event.code === "Escape") {
    onCloseModal();
  }
};

const onModalClick = (event) => {
  let overlayRef = event.target.parentNode.querySelector(".lightbox__overlay");
  if (overlayRef) {
    onCloseModal();
  }
};

galaryRef.addEventListener("click", onOpenModal);

lightboxRef.addEventListener("click", onModalClick);
