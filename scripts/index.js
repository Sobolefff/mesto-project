// константы попап профиля
const popupEditProfile = document.querySelector('#popup-profile-edit');
const buttonEdit = document.querySelector('#profile__edit-button');
const formElement = document.querySelector('#popup-edit-form');
const nameInput = formElement.querySelector('#name');
const activityInput = formElement.querySelector('#description');
const nameProfile = document.querySelector('.profile__title');
const activityProfile = document.querySelector('.profile__subtitle');

// константы попап для карточек
const popupElementAddCard = document.querySelector('#popup-add-card');
const buttonAdd = document.querySelector('.profile__add-button');
const formElementAddCard = popupElementAddCard.querySelector('#popup-add-card-form');
const titleInput = formElementAddCard.querySelector('#add-card-title');
const linkInput = formElementAddCard.querySelector('#add-card-link');
const popupAddCardButton = popupElementAddCard.querySelector('#popup-add-card__save-button'); 

// константы просмотр фото на весь экран
const popupImage = document.querySelector('#popup-viewing'); 
const buttonImageClose = popupImage.querySelector('.popup__close-button'); 
const popupImageLink = popupImage.querySelector('.popup__image'); 
const popupImageTitle = popupImage.querySelector('.popup__image-title');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const cardList = document.querySelector('.elements__list');

 

// перебираем каждый попап
const allPopups = Array.from(document.querySelectorAll('.popup')); 
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

  // открытие попапа
  const openPopup = popupWindow => {
    popupWindow.classList.add('popup_opened');
  };
  
  // закрытие попапа
  const closePopup = popupWindow => {
    popupWindow.classList.remove('popup_opened');
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

   // удаление карточек
   const deleteCard = cardTemplate => {
    cardTemplate.querySelector('.element__remove-button').addEventListener('click', () => cardTemplate.remove());
  };
  
  // лайки
  const likeCard = cardTemplate => {
    cardTemplate.querySelector('.element__like-link').addEventListener('click', evt => evt.target.classList.toggle('element__like-link_liked'));
  };
  
 // рендер карточек
  const createCard = card => {
    const cardTemplate = document.querySelector('#cardTemplate');
    const cardTemplateElement = cardTemplate.content.querySelector('.element').cloneNode(true);
    const image = cardTemplateElement.querySelector('.element__image');
    const text = cardTemplateElement.querySelector('.element__title');
    text.textContent = card.name;
    image.src = card.link;
    image.alt = card.name;
    image.addEventListener("click", () => { 
      popupImageLink.src = image.src;
      popupImageLink.alt = text.textContent;
      popupImageTitle.textContent = text.textContent;
      openPopup(popupImage);
    });
    likeCard(cardTemplateElement);
    deleteCard(cardTemplateElement);
  
    return cardTemplateElement;
  };
  
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