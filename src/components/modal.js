import { 
         avatarInput, 
         profileAvatar,
         nameInput,
         activityInput,
         nameProfile,
         activityProfile,
         popupAvatar,
         popupEditProfile,
         popupElementAddCard
} from "./constants.js";
import { validateConfig } from './configs.js';
import { addPrependCard } from './card.js';
import { editAvatar, editUserInfo, addCard } from "./api.js";

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

  function showEditBtn(editImage) {
    editImage.classList.add('profile__change-avatar_active');
  }
  
  function hiddenEditBtn(editImage) {
    editImage.classList.remove('profile__change-avatar_active');
  }

  //Редактирование аватара
  function handleAvatarFormSubmit(evt, avatarForm) {
    evt.preventDefault()
    const avatarSrc = avatarInput.value;
    renderLoading(true, evt);
    editAvatar(avatarSrc)
      .then(() => {
        profileAvatar.src = avatarSrc;
        closePopup(popupAvatar);
        avatarForm.reset();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
      .finally(() => {
        renderLoading(false, evt)
      })
  }

  //Редактирование профиля
  function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const nameInputValue = nameInput.value;
    const activityInputValue = activityInput.value;
    renderLoading(true, evt);
    editUserInfo(nameInputValue, activityInputValue)
      .then(() => {
        nameProfile.textContent = nameInputValue;
        activityProfile.textContent = activityInputValue;
        closePopup(popupEditProfile);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
      .finally(() => {
        renderLoading(false, evt)
      })
  }

  function handlePlaceFormSubmit(evt, placeForm, placeLinkValue, placeDescriptionValue) {
    renderLoading(true, evt);
    addCard(placeLinkValue, placeDescriptionValue)
      .then((data) => {
        const like = data.likes;
        const cardOwnerID = data.owner._id;
        const cardID = data._id;
        const likesOwnerID = [];
        like.forEach(element => {
          likesOwnerID.push(element._id);
        });
        addPrependCard(placeLinkValue, placeDescriptionValue, like.length, cardOwnerID, cardOwnerID, cardID, likesOwnerID);
        closePopup(popupElementAddCard);
        placeForm.reset();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
      .finally(() => {
        renderLoading(false, evt)
      })
  }

  function renderLoading(isLoading, evt) {
    const btn = evt.submitter;  
    if (isLoading) {
      btn.textContent = 'Сохранение...';
      btn.classList.remove(validateConfig.inactiveButtonClass);
    } else {
      btn.textContent = 'Сохранить';
      btn.classList.add(validateConfig.inactiveButtonClass);
    }
  }

  export {
      openPopup,
      closePopup,
      showEditBtn,
      hiddenEditBtn,
      handleAvatarFormSubmit,
      renderLoading,
      handleProfileFormSubmit,
      handlePlaceFormSubmit
  };