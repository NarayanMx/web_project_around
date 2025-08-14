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
let imageDisplayClose = imageContainer.querySelector(".display__close-button");


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


initialCards.forEach(function (entry){
  newCard = forgeCard(entry.name, entry.link)
  newCard.classList.add("elements__frame")
  elementsContainer.append(newCard);
});



function forgeCard (name, link){

let templateCard = template.content.querySelector(".template__frame").cloneNode(true);

let cardText = templateCard.querySelector(".elements__text");
cardText.textContent = name;
cardText.classList.add("elements__text")

let cardImage = templateCard.querySelector(".elements__image");
cardImage.src = link;
cardImage.alt = name;
cardImage.classList.add("elements__image")


cardImage.addEventListener("click", () => {
  imageDisplayImg.src = link;
  imageDisplayImg.alt = name;
  imageDisplayText.textContent = name;
  imageContainer.classList.add("display_on");
});

let likeButton = templateCard.querySelector(".template__like-button");
let likeButtonOn = templateCard.querySelector(".template__black-button");

likeButton.classList.add("elements__like-button")
likeButton.addEventListener ("click", () => {
  likeButton.classList.toggle("elements__button-hidden")
  likeButtonOn.classList.toggle("elements__button-hidden");
});

likeButtonOn.classList.add("elements__black-button", "elements__button-hidden")
likeButtonOn.addEventListener ("click", () => {
  likeButtonOn.classList.toggle("elements__button-hidden")
  likeButton.classList.toggle("elements__button-hidden");
});

let trashButton = templateCard.querySelector(".template__trash-button");
trashButton.classList.add("elements__trash-button")
trashButton.addEventListener("click", () => { templateCard.remove();
});

return templateCard;

};


/*Función para cerrar la visualización de la imágen*/

imageDisplayClose.addEventListener("click", () => {
  imageContainer.classList.remove("display_on");
});


/*Función para activar o desactivar Style del botón gurdar*/
/*
function verificartexto () {
let textoActivo = Array.from(texto).some(input => input.value !=="")

if (textoActivo) {
guardar.classList.add("popup__save-button_active");
saveButtonImg.classList.add("popupImg__save-button_active");
} else {
guardar.classList.remove("popup__save-button_active");
saveButtonImg.classList.remove("popupImg__save-button_active");
}}

texto.forEach(input => {
  input.addEventListener("input", verificartexto);
});

*/
/*Funcionalidad de los botones del popup profile*/


editar.addEventListener ("click", () => {
  popup.classList.add("popup__opened");
});

cerrar.addEventListener ("click", () => {
  popup.classList.remove("popup__opened");
});

guardar.addEventListener("click", (e) => {
  e.preventDefault();
  profile.textContent = nombre.value;
  role.textContent = acerca.value;
  popup.classList.remove("popup__opened");
});

/*Funcionalidad de los botones del popup Img*/


addButton.addEventListener ("click", () => {
  popupImg.classList.add("popupImg__opened");
});

closeButtonImg.addEventListener ("click", () => {
  popupImg.classList.remove("popupImg__opened");
});

dataImg.addEventListener("submit", (event) => {
  event.preventDefault();
  let titulo = inputTittleImg.value;
  let url = inputUrlImage.value;

  let addCard = forgeCard(titulo,url);
  addCard.classList.add("elements__frame")
  elementsContainer.prepend(addCard);

  inputTittleImg.value = "";
  inputUrlImage.value = "";

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


/*Cerrar los popup al presionar Esc fuera de ellos*/

document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    popup.classList.remove('popup__opened');
    popupImg.classList.remove('popupImg__opened');
    }
});
