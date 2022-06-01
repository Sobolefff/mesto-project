import { popupImage, cardList, popupImageLink, popupImageTitle } from "./constants.js";
import { openPopup } from "./modal.js";
import { delCard, likCard} from './api.js'



function like(evt, likeShow, cardID) {
  

  let method = '';

  if (evt.target.classList.contains('element__like-link_liked')) {
    method = 'DELETE';
  } else {
    method = 'PUT';
  }

  likCard(cardID, method)
    .then((data) => {
      evt.target.classList.toggle('element__like-link_liked');
      likeShow.textContent = data.likes.length;
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    })
}

function del(event) {
  const target = event.target;

  target.closest('.element').remove();
}

function createCard
  (
    placeLinkValue,
    placeDescriptionValue,
    likes,
    myId,
    cardOwnerID,
    cardID,
    likesOwnerID
  ) {

  const cardTemplate = document.querySelector('#cardTemplate').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const image = cardElement.querySelector('.element__image');
  const descriprionImage = cardElement.querySelector('.element__title');

  const likeButton = cardElement.querySelector('.element__like-link');
  const deleteButton = cardElement.querySelector('.element__remove-button');

  const likeShow = cardElement.querySelector('.element__likes-counter');

  image.src = `${placeLinkValue}`;
  image.alt = `${placeDescriptionValue}`;
  image.dataset.id = cardID;
  descriprionImage.textContent = `${placeDescriptionValue}`;
  likeShow.textContent = `${likes}`;

  image.addEventListener('click', function () {
    popupImageLink.src = `${placeLinkValue}`;
    popupImageLink.alt = `${placeDescriptionValue}`;
    popupImageTitle.textContent = `${placeDescriptionValue}`;

    openPopup(popupImage);
  });

  if (myId === cardOwnerID) {
    deleteButton.addEventListener('click', function (event) {
      delCard(cardID)
        .then(() => {
          del(event);
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен: ', err);
        })
    })
  } else {
    deleteButton.remove();
  }

  if (likesOwnerID.includes(myId)) {
    likeButton.classList.add('element__like-link_liked');
  }

  likeButton.addEventListener('click', function (evt) {
    like(evt, likeShow, cardID)
  })

  return cardElement;
}

function addPrependCard(placeLinkValue, placeDescriptionValue, likes, myId, cardOwnerID, cardID, likesOwnerID) {
  const cardElement = createCard(placeLinkValue, placeDescriptionValue, likes, myId, cardOwnerID, cardID, likesOwnerID);

  cardList.prepend(cardElement);
}

export { addPrependCard };
