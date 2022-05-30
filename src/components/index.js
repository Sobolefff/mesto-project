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
  submitFormProfile
} from './modal.js';

import { createCard } from './card.js';
  
// перебираем каждый попап
allPopups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup) // закрыть по крестику
      };
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup) // закрыть по оверлею
      };
      
  });
});

  //клик по кнопке редактирования профиля
  buttonEdit.addEventListener('click', () => {
    openPopup(popupEditProfile);
    nameInput.value = nameProfile.textContent; 
    activityInput.value = activityProfile.textContent;
  });

  formElement.addEventListener('submit', submitFormProfile);
  
  // добавляем карточки
  const createdCards = initialCards.map(card => createCard(card)); 
  
  cardList.append(...createdCards);
  
  // клик по плюсу
  buttonAdd.addEventListener('click', () => {
    openPopup(popupElementAddCard);
    titleInput.value = ''; 
    linkInput.value = '';
  });
  
  // функция сохранения 
  const submitFormHandlerAddCard = evt => {
    evt.preventDefault();
    const inputTitleValue = titleInput.value;
    const inputLinkValue = linkInput.value;
    const newCardName = createCard( {name: inputTitleValue, link: inputLinkValue});
    cardList.prepend(newCardName); 
    closePopup(popupElementAddCard);
  };
  formElementAddCard.addEventListener('submit', submitFormHandlerAddCard); 
  buttonImageClose.addEventListener('click', () => closePopup(popupImage));

  //функция включения валидации
  enableValidation(validationConfig);