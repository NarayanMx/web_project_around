import  Popup from "../components/Popup.js"

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(formSelector);
    this._inputList = this._form.querySelectorAll(".popup__input");
  }//Cierre del constructor


_getInputValues () {
const formValues = {}; //Objeto vacío

this._inputList.forEach((input) => {
formValues[input.name] = input.value;
});

return formValues;
}//Cierre del método getInputValues

setEventListeners(){
super.setEventListeners();
this._form.addEventListener("submit", (evt) => {
evt.preventDefault();
this._handleFormSubmit(this._getInputValues());
});
}//Cierre del setEventListeners modificado

close(){
super.close();
this._form.reset();
this._popup.querySelector(".popupImg__container").classList.add("popupImg__container-close");
}//Cierre del método close modificado


}//Cierre de la clase