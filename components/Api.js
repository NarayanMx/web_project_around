export default class Api {
constructor(options){
this._baseUrl = options.baseUrl;
this._headers = options.headers;
}//Cierre del constructor de la clase Api

_checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

getUserInfo() {
return fetch(`${this._baseUrl}/users/me`, {
  headers: this._headers
})
.then(res => this._checkResponse(res))
}

getInitialCards() {
  return fetch(`${this._baseUrl}/cards`, {
    headers: this._headers
  })
.then(res => this._checkResponse(res));
}

updateUserInfo(data) {
  return fetch(`${this._baseUrl}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
  })
.then(res => this._checkResponse(res));
}

addCard(data) {
  return fetch(`${this._baseUrl}/cards`,{
    method: "POST",
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link
  })
  })
.then(res => this._checkResponse(res));
}

deleteCard(cardId) {
  return fetch (`${this._baseUrl}/cards/${cardId}`,{
    method: "DELETE",
    headers: this._headers
  })
.then(res => this._checkResponse(res));
}

likeCard(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: "PUT",
    headers: this._headers
  })
.then(res => this._checkResponse(res));
}


unlikeCard(cardId) {
  return fetch (`${this._baseUrl}/cards/${cardId}/likes`, {
    method: "DELETE",
    headers: this._headers
  })
.then(res => this._checkResponse(res));
}

setUserAvatar(data) {
  return fetch (`${this._baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      avatar: data.avatar
    })
  })
.then(res => this._checkResponse(res));
}


}//Cierre de la clase Api



