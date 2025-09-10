export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._form = formElement;
    this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
  }

  // Mostrar mensaje de error
  _showInputError(input, message) {
    const errorElement = this._form.querySelector(`#${input.id}-error`); /*span*/
      errorElement.textContent = message;
    errorElement.classList.add(this._config.errorClass);
    input.classList.add(this._config.inputErrorClass);
  }

  //Ocultar error en un input
  _hideInputError(input) {
   const errorElement = this._form.querySelector(`#${input.id}-error`); /*span*/
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorClass);
   input.classList.remove(this._config.inputErrorClass);
  }

  // Revisar si los imputs son validos
  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input, input.validationMessage);
    }
  }

  // Activar o desactivar botón
  _toggleButtonState() {
    const isValid = this._inputs.every(input => input.validity.valid);
    if (isValid) {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.classList.add("popupImg__save-button");
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.classList.remove("popupImg__save-button");
      this._submitButton.disabled = true;
    }
  }

  //Eventos (privado)
 _setEventListeners() {
    this._inputs.forEach(input => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  // Activa la validación (público)
  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }
}

