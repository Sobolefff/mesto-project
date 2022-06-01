// константы попап профиля
const popupEditProfile = document.querySelector('#popup-profile-edit');
const buttonEdit = document.querySelector('#profile__edit-button');
const formElement = document.querySelector('#popup-edit-form');
const nameInput = formElement.querySelector('#name');
const activityInput = formElement.querySelector('#description');
const nameProfile = document.querySelector('.profile__title');
const activityProfile = document.querySelector('.profile__subtitle');
const profileAvatar = document.querySelector('.profile__avatar');

const editAvatarBtn = document.querySelector('.profile__edit-avatar');
const editAvatarBtnActive = document.querySelector('.profile__change-avatar');

const popupAvatar = document.querySelector('#popup-avatar-edit');
const avatarForm = popupAvatar.querySelector('#popup-avatar-form');
const avatarInput = avatarForm.querySelector('#add-avatar-link');
const popupSaveAvatarButton = popupAvatar.querySelector('#popup-avatar_save-button');
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
    cardList,
    allPopups,
    cardTemplate,
    editAvatarBtn,
    editAvatarBtnActive,
    popupAvatar,
    avatarForm,
    avatarInput,
    profileAvatar,
    popupSaveAvatarButton
}