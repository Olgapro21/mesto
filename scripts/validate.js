const validationConfig = {
  popupForms: document.forms,
  //formSelector: '.popup__form', // форма
  inputSelector: '.popup__input', // импут
  submitButtonSelector: '.popup__button', //активная кнопка
  inactiveButtonClass: 'popup__button_disabled', //кнопка не активна
  inputErrorClass: 'popup__input_type_error', // появляется при ошибке в импуте
  errorClass: 'popup__error_visible', // появляется при ошибке в спане
  errorSelector: '.popup__error_type_' // контейнер для уникального name
}

enadleValidation(validationConfig);

//функция enableValidation ответственна за включение валидации всех форм.
function enadleValidation (object) {
  const forms = Array.from(object.popupForms); //создала массив из форм
  forms.forEach((form) => {
    const formInputs = form.querySelectorAll(object.inputSelector)
    const formButton = form.querySelector(object.submitButtonSelector) //нашла кнопку актива
    hangEventListeners(formInputs, formButton, object.inactiveButtonClass, object.inputErrorClass, object.errorClass, object.errorSelector);
  })
}

//функция oбходит все элементы полученной коллекции
function hangEventListeners(formInputs, formButton, inactiveButtonClass, inputErrorClass, errorClass, errorSelector) {
  formInputs.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(input, inputErrorClass, errorClass, errorSelector);
      toggleButtonState(formInputs, formButton, inactiveButtonClass);
    })
  })
}

//Функция проверяет валидность полей
function isValid(input, inputErrorClass, errorClass, errorSelector) {
  const errorContainer = document.querySelector(`${errorSelector}${input.name}`)
  if (!input.validity.valid) {
    showInputError(input, errorContainer, inputErrorClass, errorClass);
  }
  else {
    hideInputError(input, errorContainer, inputErrorClass, errorClass);
  };
};

//Показываем ошибку
function showInputError (input, errorContainer, inputErrorClass, errorClass) {
  input.classList.add(inputErrorClass);
  errorContainer.textContent = input.validationMessage;
  errorContainer.classList.add(errorClass);
}

//Скрываем ошибку
function hideInputError (input, errorContainer, inputErrorClass, errorClass) {
  input.classList.remove(inputErrorClass);
  errorContainer.textContent = '';
  errorContainer.classList.remove(errorClass);
}

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
function toggleButtonState(formInputs, formButton, inactiveButtonClass) {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(formInputs)) {
    // сделай кнопку неактивной и присвой атрибут disabled
    formButton.classList.add(inactiveButtonClass);
    formButton.setAttribute('disabled', true);
  }
  else {
    // иначе сделай кнопку активной
    formButton.classList.remove(inactiveButtonClass);
    formButton.removeAttribute("disabled");
  };
};

//Функция принимает массив полей
function hasInvalidInput(formInputs) {
  return Array.from(formInputs).some((input) => !input.validity.valid)
}

//Очистка формы
function resetErrorMessageOpenForm(form) {
  form.querySelectorAll(validationConfig.inputSelector).forEach((input) => {
   const errorTextMessage = document.querySelector(`${validationConfig.errorSelector}${input.name}`)
   if (!input.validity.valid)
   hideInputError(input, errorTextMessage, validationConfig.inputErrorClass, validationConfig.errorClass)
  });
}





































































