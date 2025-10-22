import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".display__image");
    this._captionElement = this._popup.querySelector(".display__text");
  }//Cierre del constructor

  open ({link, name}) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._captionElement.textContent = name;
    super.open();
  }//Cierre del método Open

  close(){
    super.close();
    this._imageElement.src = "";
    this._imageElement.alt = "";
    this._captionElement.textContent = "";
  }//Cierre del método Close

} //Cierre de la clase