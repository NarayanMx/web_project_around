export function handleCardClick(name, link, popupInstance) {

  const img = document.querySelector(".display__image");
  const text = document.querySelector(".display__text");

  img.src = link;
  img.alt = name;
  text.textContent = name;

  popupInstance.open({ name, link });
}

// Controladores de eventos
export function enableListener(){

let nombre = document.querySelector(".popup__name")
let acerca = document.querySelector(".popup__acerca")
let texto = document.querySelectorAll("input")
let guardar = document.querySelector(".popup__save-button")
let editar = document.querySelector(".profile__edit-button")
let popup = document.querySelector(".popup")
let cerrar = document.querySelector(".popup__close-button")
let profile = document.querySelector(".profile__name")
let role = document.querySelector(".profile__role")
let template = document.querySelector(".template")
let elementsContainer = document.querySelector(".elements")
let addButton = document.querySelector(".profile__add-button")
let popupImg = document.querySelector(".popupImg")
let closeButtonImg = document.querySelector(".popupImg__close-button")
let saveButtonImg = document.querySelector(".popupImg__save-button")
let inputTittleImg = document.querySelector(".popupImg__ttl")
let inputUrlImage = document.querySelector(".popupImg__url")
let dataImg = popupImg.querySelector("form")
let imageContainer = document.querySelector(".display__container");
let imageDisplayImg = imageContainer.querySelector(".display__image");
let imageDisplayText = imageContainer.querySelector(".display__text");

/*Función para cerrar la visualización de la imágen*/
let imageDisplayClose = imageContainer.querySelector(".display__close-button");

imageDisplayClose.addEventListener("click", () => {
imageContainer.classList.remove("display_on");
});


/*Funcionalidad de los botones del popup profile*/
editar.addEventListener ("click", () => {
  popup.classList.add("popup__opened");
});

cerrar.addEventListener ("click", () => {
  popup.classList.remove("popup__opened");
});

/*Funcionalidad de los botones del popup Img*/
addButton.addEventListener ("click", () => {
  popupImg.classList.add("popupImg__opened");
});

closeButtonImg.addEventListener ("click", () => {
  popupImg.classList.remove("popupImg__opened");
});

/*Cerrar los popup al hacer click fuera de ellos*/
popup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    popup.classList.remove('popup__opened');
  }
});

popupImg.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    popupImg.classList.remove('popupImg__opened');
  }
});

/*Cerrar los popup al presionar Esc de ellos*/
document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    popup.classList.remove('popup__opened');
    popupImg.classList.remove('popupImg__opened');
    }
});
}