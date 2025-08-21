export class Card {
  constructor(name, link, templateSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
  }

  //Plantilla (privado)
_getTemplate() {
    return document
    .querySelector(this._templateSelector)
    .content
    .querySelector(".template__frame")
    .cloneNode(true);
    }

    //Eventos (privdo)
  _setEventListeners() {
    this._image.addEventListener("click", () => this._handleImageClick(this._name, this._link));

    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("elements__button-hidden");
      this._likeButtonOn.classList.toggle("elements__button-hidden");
    });

    this._likeButtonOn.addEventListener("click", () => {
      this._likeButton.classList.toggle("elements__button-hidden");
      this._likeButtonOn.classList.toggle("elements__button-hidden");
    });

    this._trashButton.addEventListener("click", () => this._element.remove());
  }

//Crear tarjeta (método público)
generateCard() {

  //Hacer el elemento
    this._element = this._getTemplate();

    //Rellenarlo
    this._image = this._element.querySelector(".elements__image");
    this._likeButton = this._element.querySelector(".template__like-button");
    this._likeButtonOn = this._element.querySelector(".template__black-button");
    this._trashButton = this._element.querySelector(".template__trash-button");
   this._text = this._element.querySelector(".elements__text");
   this._text.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    //Ponerle sus clases para estilo
    this._element.classList.add("elements__frame");
    this._text.classList.add("elements__text");
    this._image.classList.add("elements__image");
    this._likeButton.classList.add("elements__like-button");
    this._likeButtonOn.classList.add("elements__black-button", "elements__button-hidden");
    this._trashButton.classList.add("elements__trash-button");

    //Agregarle los eventos
    this._setEventListeners();

    //Juntarlo todo y hacer la tarjeta
    return this._element;
  }
}








