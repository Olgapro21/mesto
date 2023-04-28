export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector; //общий импут форм
    this._submitButtonSelector = config.submitButtonSelector; //активная кнопка
    this._inactiveButtonClass = config.inactiveButtonClass; //кнопка не активна
    this._inputErrorClass = config.inputErrorClass; // появляется при ошибке в импуте
    this._errorClass = config.errorClass; //появляется при ошибке в спане флекс
    this._errorSelector = config.errorSelector; //контейнер для уникального name
    this._form = form;
    this._buttonElement = this._form.querySelector(this._submitButtonSelector); //общая кнопка форм
    this._inputElement = this._form.querySelectorAll(this._inputSelector) //общий импут форм для работы с массивом
  }

  //Показываем ошибку
  _showInputError(errorContainer, input) {
    input.classList.add(this._inputErrorClass); // добавила красную черту
    errorContainer.textContent = input.validationMessage; //добавила сообщение об ошибке
    errorContainer.classList.add(this._errorClass); // добавила видимость для спана
  }

  //Скрываем ошибку
  _hideInputError(errorContainer, input) {
    input.classList.remove(this._inputErrorClass);
    errorContainer.textContent = '';
    errorContainer.classList.remove(this._errorClass);
  }

  //проверяем валидность полей
  _isValid(input) {
    const errorContainer = this._form.querySelector(`${this._errorSelector}${input.name}`);
    if (!input.validity.valid) {
     this._showInputError(errorContainer, input);
    }
    else {
     this._hideInputError(errorContainer, input);
    };
  }

  //сделаем кнопку активной и удалим атрибут disabled
  _enableButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute("disabled");
  }

  //сделаем кнопку неактивной и присваиваем атрибут disabled
  _disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }

  _hasInvalidInput() {
    return Array.from(this._inputElement).some((input) => !input.validity.valid)
  }

  _toggleButtonState () {
    if (this._hasInvalidInput()) {
      this._disableButton(this._buttonElement);
    } else {
      this._enableButton();
    };
  };

  _setEventListeners() {
    this._inputElement.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._toggleButtonState();
      })
    })
  };

  enadleValidation() {
    this._setEventListeners();
  }

  resetErrorMessageOpenForm() {
    this._inputElement.forEach(input => {
      const errorContainer = this._form.querySelector(`${this._errorSelector}${input.name}`)
      if (!input.validity.valid) {
        this._hideInputError(errorContainer, input);
      }
    })
    this._disableButton()
  }
}
