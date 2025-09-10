export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }//Cierre del constructor

  // Devuelve la info actual del usuario
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent
    };
  }

  // Actualiza la info del usuario en la página
  setUserInfo({ name, job }) {
    if (name) this._nameElement.textContent = name;
    if (job) this._jobElement.textContent = job;
  }

}//Cierre de la clase