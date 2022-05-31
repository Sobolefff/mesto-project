import { popupImageLink, popupImageTitle, popupImage } from "./constants.js";
import { openPopup } from "./modal.js";

function deleteCard(evt) {
  evt.target.closest('.element').remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('element__like-link_liked');
}

//превью
function preview(evt) {
  popupImageLink.src = evt.target.src;
  popupImageLink.alt = evt.target.alt;
  popupImageTitle.textContent = popupImageLink.alt;
  openPopup(popupImage);
}

 //рендер карточек
const getTemplate = () => {
  return document
    .querySelector('#cardTemplate')
    .content
    .querySelector('.element')
    .cloneNode(true);
}; 

//создаем карточки
    const createCard = card => {
    const cardTemplateElement = getTemplate();
    const image = cardTemplateElement.querySelector('.element__image');
    const text = cardTemplateElement.querySelector('.element__title'); 
    image.src = card.link;
    image.alt = card.name;
    text.textContent = card.name;
    setEventListeners(cardTemplateElement);
    return cardTemplateElement;
  };

  
  //вешаем слушатели
  const setEventListeners = cardTemplate => {
    const like = cardTemplate.querySelector('.element__like-link');
    const del = cardTemplate.querySelector('.element__remove-button');
    const img = cardTemplate.querySelector('.element__image');
    like.addEventListener('click', likeCard);
    del.addEventListener('click', deleteCard);
    img.addEventListener("click", preview);
  }

  export { createCard };