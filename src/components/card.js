import { popupImageLink, popupImageTitle, popupImage } from "./constants.js";
import { openPopup } from "./modal.js";

function deleteCard(evt) {
  evt.target.closest('.element').remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('element__like-link_liked');
}
const setEventListeners = (cardTemplate) => {
  const like = cardTemplate.querySelector('.element__like-link');
  const del = cardTemplate.querySelector('.element__remove-button');
  like.addEventListener('click', likeCard);
  del.addEventListener('click', deleteCard);
}

 //рендер карточек
const getTemplate = () => {
  return document
    .querySelector('#cardTemplate')
    .content
    .querySelector('.element')
    .cloneNode(true);
}; 

    const createCard = card => {
    const cardTemplateElement = getTemplate();
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
    setEventListeners(cardTemplateElement);
    return cardTemplateElement;
  };

  export { createCard };