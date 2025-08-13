function enableValidation(config) {

  function showInputError(formElement, inputElement, errorMessage) {
    const errorId = inputElement.id + "-error";
    const errorElement = formElement.querySelector(`#${errorId}`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
    inputElement.classList.add(config.inputErrorClass);
  }

  function hideInputError(formElement, inputElement) {
    const errorId = inputElement.id + "-error";
    const errorElement = formElement.querySelector(`#${errorId}`);

    errorElement.textContent = "";
    errorElement.classList.remove(config.errorClass);
    inputElement.classList.remove(config.inputErrorClass);
  }

  function checkInputValidity(formElement, inputElement) {
    if (inputElement.validity.valid) {
      hideInputError(formElement, inputElement);
    } else {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    }
  }

  function toggleButtonState(formElement) {
    const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
    const submitButton = formElement.querySelector(config.submitButtonSelector);
    const formIsValid = inputs.every(input => input.validity.valid);

    if (formIsValid) {
      submitButton.classList.remove(config.inactiveButtonClass);
      submitButton.disabled = false;
    } else {
      submitButton.classList.add(config.inactiveButtonClass);
      submitButton.disabled = true;
    }
  }

  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((formElement) => {
    const inputs = formElement.querySelectorAll(config.inputSelector);

    inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(formElement);
      });
    });


    toggleButtonState(formElement);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});