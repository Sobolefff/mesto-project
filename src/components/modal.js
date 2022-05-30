import {
    popupEditProfile,
    nameInput,
    activityInput,
    nameProfile,
    activityProfile
  } from './constants.js';



const setExitPopupByEsc = evt => {
    if (evt.key === "Escape") {
      closePopup(document.querySelector(".popup_opened"));
    };
  };

  // открытие попапа
  const openPopup = popupWindow => {
    popupWindow.classList.add('popup_opened');
    document.addEventListener('keydown', setExitPopupByEsc);
  };
  
  // закрытие попапа
  const closePopup = popupWindow => {
    document.removeEventListener('keydown', setExitPopupByEsc);
    popupWindow.classList.remove('popup_opened');
    
  };

  // сохраняем профиль
const submitFormProfile = evt => {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value; 
    activityProfile.textContent = activityInput.value;
    closePopup(popupEditProfile);
  };

  export {
      openPopup,
      closePopup,
      submitFormProfile
  };