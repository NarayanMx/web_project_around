const nombre = document.querySelector(".popup__name")
const acerca = document.querySelector(".popup__acerca")
const texto = document.querySelectorAll("input")
const guardar = document.querySelector(".popup__save-button")
const editar = document.querySelector(".profile__edit-button")
const popup = document.querySelector(".popup")
const cerrar = document.querySelector(".popup__close-button")
const profile = document.querySelector(".profile__name")
const role = document.querySelector(".profile__role")
const template = document.querySelector(".template")
const elementsContainer = document.querySelector(".elements")
const addButton = document.querySelector(".profile__add-button")
const popupImg = document.querySelector(".popupImg")
const closeButtonImg = document.querySelector(".popupImg__close-button")
const saveButtonImg = document.querySelector(".popupImg__save-button")
const inputTittleImg = document.querySelector(".popupImg__ttl")
const inputUrlImage = document.querySelector(".popupImg__url")
const dataImg = popupImg.querySelector("form")
const imageContainer = document.querySelector(".display__container");
const imageDisplayImg = imageContainer.querySelector(".display__image");
const imageDisplayText = imageContainer.querySelector(".display__text");
const imageDisplayClose = imageContainer.querySelector(".display__close-button");


const initialCards = [
  {    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"  },
  {    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"  },
  {    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"  },
  {    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"  },
  {    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"  },
  {    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"  }
];

//Importaciónes!!

import { Card } from "./Card.js"
import { handleImageClick, enableListener} from "./utils.js"
import { FormValidator } from "./validate.js"

//Crear tarjetas iniciales con clase Card
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, ".template", handleImageClick);
  const cardElement = card.generateCard();
  elementsContainer.append(cardElement);
});

// Crear tarjetas nuevas con clase Card
dataImg.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = inputTittleImg.value;
  const link = inputUrlImage.value;

  const cardCopy = new Card(name, link, ".template", handleImageClick);
  const card = cardCopy.generateCard();
  elementsContainer.prepend(card);

  inputTittleImg.value = "";
  inputUrlImage.value = "";

  popupImg.classList.remove("popupImg__opened");
});


// Validación de formularios con clase FormValidator
const forms = document.querySelectorAll(".popup__form");
forms.forEach(form => {
  const validator = new FormValidator({
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  }, form);
  validator.enableValidation();
});

//Activar los eventos de los popups
enableListener();



