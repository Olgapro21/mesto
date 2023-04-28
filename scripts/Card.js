export default class Card {
  constructor(item, itemTemplate, openPopupImage) {
    this._item = item;
    this._name = item.name;
    this._link = item.link;
    this._itemTemplate = itemTemplate;
    this._openPopupImage = openPopupImage;
  }

  _getCloneTemplate() {
    return document.querySelector(this._itemTemplate).content.querySelector(".element__list").cloneNode(true);
  }

  _handleOpenPopupImage = () => {
    this._openPopupImage(this._item)
  }

  _handleDelete = () => {
    this._cloneObject.remove(); //функция удаления
  }

  _handleLike = () => {
    this._likeTemplateElement.classList.toggle("element__like-ico_active"); // Лайк карточки
  }

  _setEventListeners() {
    this._imageTemplateElement.addEventListener("click", this._handleOpenPopupImage) // обработчик открытия картинки
    this._deleteTemplateElement.addEventListener("click", this._handleDelete) //обработчик удаления
    this._likeTemplateElement.addEventListener("click", this._handleLike) // обработчик лайка
  }

  createCard() {
    this._cloneObject = this._getCloneTemplate();
    this._imageTemplateElement = this._cloneObject.querySelector(".element__image"); // картинка
    this._deleteTemplateElement = this._cloneObject.querySelector(".element__delete-image"); // корзина
    this._likeTemplateElement = this._cloneObject.querySelector(".element__like-ico"); // лайк
    this._titleTemplateElement = this._cloneObject.querySelector(".element__title"); //подпись
    this._imageTemplateElement.src = this._link;
    this._imageTemplateElement.alt = this._name;
    this._titleTemplateElement.textContent = this._name;
    this._setEventListeners()
    return this._cloneObject
  }
}
