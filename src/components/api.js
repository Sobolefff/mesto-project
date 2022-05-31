export function getApi() {
    fetch('https://mesto.nomoreparties.co/v1/plus-cohort-10/cards', {
    headers: {
        authorization: '5be8f629-4791-434c-85f6-257d9be05038'
    }
    })
    .then(res => res.json())
    .then((result) => {
        console.log(result);
    });
}