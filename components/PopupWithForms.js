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


renderLoading(isLoading, loadingText = "Guardando...") {
  const submitButton = this._form.querySelector('.popup__button');
  if (isLoading) {
    this._defaultButtonText = submitButton.textContent;
    submitButton.textContent = loadingText;
  } else {
    submitButton.textContent = this._defaultButtonText;
  }
}



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
}//Cierre del método close modificado


}//Cierre de la clase