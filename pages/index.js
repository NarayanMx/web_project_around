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

import { Card } from "../components/Card.js"
import {handleCardClick, enableListener} from "../components/utils.js"
import { FormValidator } from "../components/FormValidator.js"
import  Section from "../components/Section.js"
import  Popup from "../components/Popup.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForms.js"
import UserInfo from "../components/UserInfo.js"

//Popup del modal en pantalla completa

const handleCardClickWithPopup = (name, link) => {
  handleCardClick (name, link, imagePopup);
};

const imagePopup = new PopupWithImage(".display__container", ".display__frame");
imagePopup.setEventListeners();




//Crear tarjetas iniciales con clase Section + Card


const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, ".template", handleCardClickWithPopup);
      return card.generateCard();
    }
  },
  ".elements"
);

cardSection.renderItems();


// Crear tarjetas nuevas con clase Section + Card

const addImagePopup = new PopupWithForm(
  ".popupImg",
  ".popupImg__form",
  (formValues) => {
    const { title, url } = formValues;
    const newCard = new Card(title, url, ".template", handleCardClickWithPopup).generateCard();
    cardSection.addItem(newCard);
    addImagePopup.close();
  }
);

addImagePopup.setEventListeners();

const addButton = document.querySelector(".profile__add-button");

addButton.addEventListener("click", () => {
  addImagePopup.open();
});





















// Información del usuario

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__role"
});

const profilePopup = new PopupWithForm(
  ".popup",
  ".popup__form",
  (formValues) => {
    userInfo.setUserInfo({
      name: formValues.nombre,
      job: formValues.acerca
    });
    profilePopup.close();
  }
);

profilePopup.setEventListeners();

const editButton = document.querySelector(".profile__edit-button");
editButton.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  document.querySelector("#name-input").value = currentUser.name;
  document.querySelector("#about-input").value = currentUser.job;

  profilePopup.open();
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



