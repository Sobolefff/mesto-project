// валидация форм

// скрытие ошибок
const hideInputError = (formElementGeneral, inputElement, config) => {
  const { inputErrorClass, errorClass } = config;
  const errorElement = formElementGeneral.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.remove(inputErrorClass); 
  errorElement.classList.remove(errorClass); 
  errorElement.textContent = '';
};

// Показ ошибок
const showInputError = (inputElement, { inputErrorClass, errorClass }) => {
  const errorElement = inputElement.closest('.popup__form').querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass); 
  errorElement.classList.add(errorClass);
  errorElement.textContent = inputElement.validationMessage;
}; 
  
  // Проверка валидности формы
  const checkInputValidity = (formElementGeneral, inputElement, config) => {
    if (inputElement.validity.valid) { 
      hideInputError(formElementGeneral, inputElement, config);
    } else { 
      showInputError(inputElement, config);
    };
  };
  
  // смена состояния кнопки отправить форму
  const toggleButtonState = (formElementGeneral, buttonElement, inactiveButtonClass) => {
    const isFormValid = formElementGeneral.checkValidity(); 
    buttonElement.classList.toggle(inactiveButtonClass, !isFormValid); 
    buttonElement.disabled = !isFormValid; 
  };

  
  
  // Навешиваем обработчики
  const setEventListeners = (formElementGeneral, config) => {
    const { inputSelector, submitButtonSelector, inactiveButtonClass, errorClass, inputErrorClass } = config;
    const inputList = Array.from(formElementGeneral.querySelectorAll(inputSelector));
    const buttonElement =  formElementGeneral.querySelector(submitButtonSelector); 
    toggleButtonState(formElementGeneral, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => { 
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElementGeneral, inputElement, { inputErrorClass, errorClass }); 
        toggleButtonState(formElementGeneral, buttonElement, inactiveButtonClass); 
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

  export { enableValidation };
