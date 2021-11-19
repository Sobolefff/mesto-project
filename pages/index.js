let profileButton = document.querySelector('.profile__edit-button');
let profileEdit = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
function popupProfileEdit() {
    profileEdit.classList.toggle('popup_opened');
}
function popupClose() {
    profileEdit.classList.toggle('popup_opened');
}

profileButton.addEventListener('click', popupProfileEdit);
closeButton.addEventListener('click', popupClose);
