const configCohort = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-10/',
    headers: {
        'Authorization': '5be8f629-4791-434c-85f6-257d9be05038',
        'Content-type': 'application/json',
    }
}

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res)
}

function getUserInfo() {
    return fetch(`${configCohort.baseUrl}users/me`, {
      headers: configCohort.headers,
    })
      .then(checkResponse)
}

function getCards() {
    return fetch(`${configCohort.baseUrl}cards`, {
      headers: configCohort.headers,
    })
      .then(checkResponse)
}

function editUserInfo(nameInputValue, jobInputValue) {
    return fetch(`${configCohort.baseUrl}users/me`, {
      method: 'PATCH',
      headers: configCohort.headers,
      body: JSON.stringify({
        name: `${nameInputValue}`,
        about: `${jobInputValue}`,
      })
    })
      .then(checkResponse)
}

function addCard(placeLinkValue, placeDescriptionValue) {
    return fetch(`${configCohort.baseUrl}cards`, {
      method: 'POST',
      headers: configCohort.headers,
      body: JSON.stringify({
        name: `${placeDescriptionValue}`,
        link: `${placeLinkValue}`,
      })
    })
      .then(checkResponse)
}

function delCard(cardID) {
    return fetch(`${configCohort.baseUrl}cards/${cardID}`, {
      method: 'DELETE',
      headers: configCohort.headers,
    })
      .then(checkResponse)
}

function likCard(cardID, method) {
  return fetch(`${configCohort.baseUrl}cards/likes/${cardID}`, {
    method: method,
    headers: configCohort.headers,
  })
    .then(checkResponse)
}

function editAvatar(avatarInputValue) {
    return fetch(`${configCohort.baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: configCohort.headers,
      body: JSON.stringify({
        avatar: `${avatarInputValue}`,
      })
    })
      .then(checkResponse)
}

export {
    getUserInfo,
    getCards,
    addCard,
    editUserInfo,
    delCard,
    likCard,
    editAvatar,
  };