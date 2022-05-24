// валидация форм
// скрытие ошибок
const hideInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config 
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(inputErrorClass); 
    errorElement.classList.remove(errorClass); 
    errorElement.textContent = '';
  };
  
  // Показ ошибок
  const showInputError = (inputElement, { inputErrorClass, errorClass }) => {
    const errorElement = inputElement.closest('.popup__form').querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass); 
    errorElement.textContent = inputElement.validationMessage; 
    errorElement.classList.add(errorClass);
  };
  
  // Проверка валидности формы
  const checkInputValidity = (formElement, inputElement, config) => {
    if (inputElement.validity.valid) { 
      hideInputError(formElement, inputElement, config);
    } else { 
      showInputError(inputElement, config);
    };
  };
  
  // смена состояния кнопки отправить форму
  const toggleButtonState = (formElement, buttonElement, inactiveButtonClass) => {
    const isFormValid = formElement.checkValidity(); 
    buttonElement.classList.toggle(inactiveButtonClass, !isFormValid); 
    buttonElement.disabled = !isFormValid; 
  };
  
  // Навешиваем обработчики
  const setEventListeners = (formElement, config) => {
    const { inputSelector, submitButtonSelector, inactiveButtonClass, errorClass, inputErrorClass } = config;
    const inputList = Array.from(formElement.querySelectorAll(inputSelector)); 
    const buttonElement =  formElement.querySelector(submitButtonSelector); 
    toggleButtonState(formElement, buttonElement, inactiveButtonClass); 
    inputList.forEach((inputElement) => { 
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, { inputErrorClass, errorClass }); 
        toggleButtonState(formElement, buttonElement, inactiveButtonClass); 
      });
    });
  };
  
  //включение валидации по всем формам
  const enableValidation = (config) => {
    const { formSelector, ...props} = config; // извлекаем formSelector, остальные свойства отправляем в props.
    const forms = Array.from(document.querySelectorAll(formSelector)); 
    forms.forEach(form => { 
      form.addEventListener('submit', evt => evt.preventDefault()); 
      setEventListeners(form, props); 
    });
  };
