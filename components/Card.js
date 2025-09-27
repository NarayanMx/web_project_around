export class Card {
  constructor(name, link, templateSelector, handleCardClick, isLiked, handleDeleteCard, _id, api) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._isLiked = isLiked;
    this._handleDeleteCard = handleDeleteCard;
    this._id = _id;
    this._api = api;
  }

  //Plantilla (privado)
_getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".template__frame")
      .cloneNode(true);

    return cardElement;
    }

  //Revisar si tiene like la tarjeta

_toggleLikeUI() {
  if (this._isLiked) {
    this._likeButton.classList.add("elements__button-hidden");
    this._likeButtonOn.classList.remove("elements__button-hidden");
  } else {
    this._likeButton.classList.remove("elements__button-hidden");
    this._likeButtonOn.classList.add("elements__button-hidden");
  }
}

    //Eventos (privdo)
_setEventListeners() {
  this._image.addEventListener("click", () => {
    this._handleCardClick(this._name, this._link);
  });



  this._likeButton.addEventListener("click", () => {
  this._api.likeCard(this._id)
  .then(updateCard => {
  this._isLiked = updateCard.isLiked;
  this._toggleLikeUI();
})
  .catch(err => console.error("Error al dar like:", err));
  });

  this._likeButtonOn.addEventListener("click", () => {
  this._api.unlikeCard(this._id)
  .then(updateCard => {
  this._isLiked = updateCard.isLiked;
  this._toggleLikeUI();
})
  .catch(err => console.error("Error al quitar like:", err));
  });

    this._trashButton.addEventListener("click", () => this._handleDeleteCard(this._id, this._element));
  }//Cierre del _setEventListeners

//Crear tarjeta (método público)
generateCard() {

  //Hacer el elemento
    this._element = this._getTemplate();

    //Rellenarlo
    this._image = this._element.querySelector(".elements__image");//
    this._likeButton = this._element.querySelector(".template__like-button");//
    this._likeButtonOn = this._element.querySelector(".template__black-button");//
    this._trashButton = this._element.querySelector(".template__trash-button");//
   this._text = this._element.querySelector(".elements__text");//
   this._text.textContent = this._name; //
    this._image.src = this._link;//
    this._image.alt = this._name;//

    //Ponerle sus clases para estilo
    this._element.classList.add("elements__frame");
    this._text.classList.add("elements__text");
    this._image.classList.add("elements__image");
    this._likeButton.classList.add("elements__like-button");
    this._likeButtonOn.classList.add("elements__black-button", "elements__button-hidden");
    this._trashButton.classList.add("elements__trash-button");

    //Agregarle los eventos
    this._setEventListeners();

    //Actualizar el estado del like
     this._toggleLikeUI();

    //Juntarlo todo y hacer la tarjeta
    return this._element;
  }
}








