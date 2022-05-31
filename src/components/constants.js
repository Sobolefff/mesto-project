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
const cardTemplate = document.querySelector('#cardTemplate');

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
const allPopups = Array.from(document.querySelectorAll('.popup'));

export { 
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
    popupAddCardButton,
    popupImage,
    buttonImageClose,
    popupImageLink,
    popupImageTitle,
    initialCards,
    cardList,
    allPopups,
    cardTemplate
}