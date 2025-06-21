let nombre = document.querySelector(".popup__name")
let acerca = document.querySelector(".popup__acerca")
let texto = document.querySelectorAll("input")
let guardar = document.querySelector(".popup__save-button")
let editar = document.querySelector(".profile__edit-button")
let popup = document.querySelector(".popup")
let cerrar = document.querySelector(".popup__close-button")
let profile = document.querySelector(".profile__name")
let role = document.querySelector(".profile__role")
let likeBtn = document.querySelector('.elements__like-button');
let blackBtn = document.querySelector('.elements__black-button');




function verificartexto () {
let textoActivo = Array.from(texto).some(input => input.value !=="")

if (textoActivo) {
guardar.classList.add("popup__save-button_active");
} else {
guardar.classList.remove("popup__save-button_active");
}
}

texto.forEach(input => {
  input.addEventListener("input", verificartexto);
});


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






document.querySelectorAll('.elements__frame').forEach(frame => {
  let likeBtn = frame.querySelector('.elements__like-button');
  let blackBtn = frame.querySelector('.elements__black-button');

  // Asegúrate de ocultar los negros desde el inicio
  blackBtn.classList.add('elements__black-button_hidden');

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.add('elements__like-button_hidden');
    blackBtn.classList.remove('elements__black-button_hidden');
  });

  blackBtn.addEventListener('click', () => {
    blackBtn.classList.add('elements__black-button_hidden');
    likeBtn.classList.remove('elements__like-button_hidden');
  });
});



