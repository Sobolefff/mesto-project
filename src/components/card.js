import { popupImageLink, popupImageTitle, popupImage } from "./constants.js";
import { openPopup } from "./modal.js";

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

  export { createCard };