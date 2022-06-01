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
    allPopups,
    editAvatarBtn,
    editAvatarBtnActive,
    popupAvatar,
    avatarForm,
    profileAvatar,
    popupSaveAvatarButton
} from './constants.js';

import { enableValidation } from './validate.js';
import { validateConfig } from './configs.js';
import {
  openPopup,
  closePopup,
  showEditBtn,
  hiddenEditBtn,
  handleAvatarFormSubmit,
  handleProfileFormSubmit,
  handlePlaceFormSubmit
} from './modal.js';

import { addPrependCard } from './card.js';
import { getUserInfo, getCards } from './api.js';
  
// перебираем каждый попап
allPopups.forEach((popup) => {
  popup.addEventListener('mouseup', (evt) => {
      if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
      }
  });
});

editAvatarBtn.addEventListener('mouseover', () => {
  showEditBtn(editAvatarBtnActive)
});

editAvatarBtn.addEventListener('mouseout', () => {
  hiddenEditBtn(editAvatarBtnActive)
});

editAvatarBtn.addEventListener('click', () => {
  openPopup(popupAvatar);
  avatarForm.reset();
  disabledButton(popupSaveAvatarButton);
});

avatarForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  disabledButton(popupSaveAvatarButton);
  handleAvatarFormSubmit(evt, avatarForm);
})

const disabledButton = button => {
  button.disabled = true;
  button.classList.add(validateConfig.inactiveButtonClass);
};

  //клик по кнопке редактирования профиля
  buttonEdit.addEventListener('click', () => {
    openPopup(popupEditProfile);
    nameInput.value = nameProfile.textContent; 
    activityInput.value = activityProfile.textContent;
  });

  // сохраняем профиль
  formElement.addEventListener('submit', handleProfileFormSubmit);
  
  // клик по плюсу
  buttonAdd.addEventListener('click', () => {
    openPopup(popupElementAddCard);
    formElementAddCard.reset();
    disabledButton(popupAddCardButton);
  });
  
  formElementAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    handlePlaceFormSubmit(evt, formElementAddCard, linkInput.value, titleInput.value);
  }); 
// Геннадий, спасибо за оперативное ревью! По поводу бага с событием клика вы наверное хотели сказать не mousedown а mouseup))
  

  Promise.all([getUserInfo(), getCards()])
  .then(([userData, cards]) => {
    
    profileAvatar.src = userData.avatar;
    nameProfile.textContent = userData.name;
    activityProfile.textContent = userData.about;
    for (let i = 0; i < cards.length; i++) {
      const like = cards[i].likes;
      const cardOwnerID = cards[i].owner._id;
      const cardID = cards[i]._id;
      const likesOwnerID = [];

      like.forEach(element => {
        likesOwnerID.push(element._id);
      });
      addPrependCard(cards[i].link, cards[i].name, like.length, userData._id, cardOwnerID, cardID, likesOwnerID);
    }
  })
  .catch(err => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  });

  //функция включения валидации
  enableValidation(validateConfig);