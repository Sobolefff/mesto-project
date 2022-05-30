import '../pages/index.css';
import {
    popupEditProfile,
    formElement,
    buttonEdit,
    nameInput,
    activityInput,
    nameProfile,
    activityProfile,
    popupElementAddCard,
    buttonAdd,
    formElementAddCard,
    popupAddCardButton,
    titleInput,
    linkInput,
    popupImage,
    buttonImageClose,
    initialCards,
    cardList,
    allPopups,
} from './constants.js';

import { enableValidation } from './validate.js';
import { validationConfig } from './configs.js';
import {
  openPopup,
  closePopup,
} from './modal.js';

import { createCard } from './card.js';
  
// перебираем каждый попап
allPopups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
      }
  });
});

const disabledButton = button => {
  button.disabled = true;
  button.classList.add(validationConfig.inactiveButtonClass);
};

  //клик по кнопке редактирования профиля
  buttonEdit.addEventListener('click', () => {
    openPopup(popupEditProfile);
    nameInput.value = nameProfile.textContent; 
    activityInput.value = activityProfile.textContent;
  });

  // сохраняем профиль
const submitFormProfile = evt => {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value; 
  activityProfile.textContent = activityInput.value;
  closePopup(popupEditProfile);
};

  formElement.addEventListener('submit', submitFormProfile);
  
  // добавляем карточки
  const createdCards = initialCards.map(card => createCard(card)); 
  
  cardList.append(...createdCards);
  
  // клик по плюсу
  buttonAdd.addEventListener('click', () => {
    openPopup(popupElementAddCard);
    formElementAddCard.reset();
  });
  
  // функция сохранения 
  const submitFormHandlerAddCard = evt => {
    evt.preventDefault();
    const inputTitleValue = titleInput.value;
    const inputLinkValue = linkInput.value;
    const newCardName = createCard( {name: inputTitleValue, link: inputLinkValue});
    cardList.prepend(newCardName);
    disabledButton(popupAddCardButton);
    closePopup(popupElementAddCard);
  };
  formElementAddCard.addEventListener('submit', submitFormHandlerAddCard); 
  buttonImageClose.addEventListener('click', () => closePopup(popupImage));

  //функция включения валидации
  enableValidation(validationConfig);