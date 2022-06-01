(()=>{"use strict";var e=document.querySelector("#popup-profile-edit"),t=document.querySelector("#profile__edit-button"),n=document.querySelector("#popup-edit-form"),r=n.querySelector("#name"),o=n.querySelector("#description"),c=document.querySelector(".profile__title"),a=document.querySelector(".profile__subtitle"),i=document.querySelector(".profile__avatar"),l=document.querySelector(".profile__edit-avatar"),u=document.querySelector(".profile__change-avatar"),s=document.querySelector("#popup-avatar-edit"),d=s.querySelector("#popup-avatar-form"),p=d.querySelector("#add-avatar-link"),f=s.querySelector("#popup-avatar_save-button"),m=document.querySelector("#popup-add-card"),v=document.querySelector(".profile__add-button"),y=m.querySelector("#popup-add-card-form"),_=y.querySelector("#add-card-title"),h=y.querySelector("#add-card-link"),S=m.querySelector("#popup-add-card__save-button"),b=(document.querySelector("#cardTemplate"),document.querySelector("#popup-viewing")),g=b.querySelector(".popup__close-button"),q=(b.querySelector(".popup__image"),b.querySelector(".popup__image-title"),document.querySelector(".elements__list")),E=Array.from(document.querySelectorAll(".popup"));var L=function(e,t,n){var r=e.checkValidity();t.classList.toggle(n,!r),t.disabled=!r},k={formSelector:".popup__form",inputSelector:".popup__input-text",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input-text_error",errorClass:"popup__error_opened"},C={baseUrl:"https://mesto.nomoreparties.co/v1/plus-cohort-10/",headers:{Authorization:"5be8f629-4791-434c-85f6-257d9be05038","Content-type":"application/json"}},x=function(e){return e.ok?e.json():Promise.reject(e)};function A(e,t,n,r,o,c,a){var i=document.querySelector("#cardTemplate").content.querySelector(".element").cloneNode(!0),l=i.querySelector(".element__image"),u=i.querySelector(".element__title"),s=i.querySelector(".element__like-link"),d=i.querySelector(".element__remove-button"),p=i.querySelector(".element__likes-counter");return l.src="".concat(e),l.alt="".concat(t),l.dataset.id=c,u.textContent="".concat(t),p.textContent="".concat(n),l.addEventListener("click",(function(){imageGallery.src="".concat(e),imageGallery.alt="".concat(t),figcaptionImageGallery.textContent="".concat(t),j(b)})),r===o?d.addEventListener("click",(function(e){(function(e){return fetch("".concat(C.baseUrl,"cards/").concat(e),{method:"DELETE",headers:C.headers}).then(x)})(c).then((function(){!function(e){e.target.closest(".element").remove()}(e)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))})):d.remove(),a.includes(r)&&s.classList.add("element__like-link_liked"),s.addEventListener("click",(function(e){!function(e,t,n){(function(e,t){return fetch("".concat(C.baseUrl,"cards/likes/").concat(e),{method:t,headers:C.headers}).then(x)})(n,e.target.classList.contains("element__like-link_liked")?"DELETE":"PUT").then((function(n){e.target.classList.toggle("element__like-link_liked"),t.textContent=n.likes.length})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))}(e,p,c)})),i}function O(e,t,n,r,o,c,a){var i=A(e,t,n,r,o,c,a);q.prepend(i)}var w=function(e){"Escape"===e.key&&U(document.querySelector(".popup_opened"))},j=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",w)},U=function(e){document.removeEventListener("keydown",w),e.classList.remove("popup_opened")};function T(e,t){var n=t.submitter;e?(n.textContent="Сохранение...",n.classList.remove(k.inactiveButtonClass)):(n.textContent="Сохранить",n.classList.add(k.inactiveButtonClass))}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}E.forEach((function(e){e.addEventListener("click",(function(t){(t.target.classList.contains("popup__close-button")||t.target.classList.contains("popup_opened"))&&U(e)}))})),l.addEventListener("mouseover",(function(){u.classList.add("profile__change-avatar_active")})),l.addEventListener("mouseout",(function(){u.classList.remove("profile__change-avatar_active")})),l.addEventListener("click",(function(){j(s),d.reset(),N(f)})),d.addEventListener("submit",(function(e){e.preventDefault(),N(f),function(e,t){e.preventDefault();var n,r=p.value;T(!0,e),(n=r,fetch("".concat(C.baseUrl,"users/me/avatar"),{method:"PATCH",headers:C.headers,body:JSON.stringify({avatar:"".concat(n)})}).then(x)).then((function(){i.src=r,U(s),t.reset()})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){T(!1,e)}))}(e,d)}));var B,D,I,N=function(e){e.disabled=!0,e.classList.add(k.inactiveButtonClass)};t.addEventListener("click",(function(){j(e),r.value=c.textContent,o.value=a.textContent})),n.addEventListener("submit",(function(t){t.preventDefault();var n=r.value,i=o.value;T(!0,t),function(e,t){return fetch("".concat(C.baseUrl,"users/me"),{method:"PATCH",headers:C.headers,body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then(x)}(n,i).then((function(){c.textContent=n,a.textContent=i,U(e)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){T(!1,t)}))})),v.addEventListener("click",(function(){j(m),y.reset(),N(S)})),y.addEventListener("submit",(function(e){e.preventDefault(),function(e,t,n,r){T(!0,e),function(e,t){return fetch("".concat(C.baseUrl,"cards"),{method:"POST",headers:C.headers,body:JSON.stringify({name:"".concat(t),link:"".concat(e)})}).then(x)}(n,r).then((function(e){var o=e.likes,c=e.owner._id,a=e._id,i=[];o.forEach((function(e){i.push(e._id)})),O(n,r,o.length,c,c,a,i),U(m),t.reset()})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})).finally((function(){T(!1,e)}))}(e,y,h.value,_.value)})),g.addEventListener("click",(function(){return U(b)})),Promise.all([fetch("".concat(C.baseUrl,"users/me"),{headers:C.headers}).then(x),fetch("".concat(C.baseUrl,"cards"),{headers:C.headers}).then(x)]).then((function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),n=t[0],r=t[1];i.src=n.avatar,c.textContent=n.name,a.textContent=n.about;for(var o=function(e){var t=r[e].likes,o=r[e].owner._id,c=r[e]._id,a=[];t.forEach((function(e){a.push(e._id)})),O(r[e].link,r[e].name,t.length,n._id,o,c,a)},l=0;l<r.length;l++)o(l)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)})),D=(B=k).formSelector,I=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(B,["formSelector"]),Array.from(document.querySelectorAll(D)).forEach((function(e){e.addEventListener("submit",(function(e){return e.preventDefault()})),function(e,t){var n=t.inputSelector,r=t.submitButtonSelector,o=t.inactiveButtonClass,c=t.errorClass,a=t.inputErrorClass,i=Array.from(e.querySelectorAll(n)),l=e.querySelector(r);L(e,l,o),i.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=n.inputErrorClass,o=n.errorClass,c=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(r),c.classList.remove(o),c.textContent=""}(e,t,n):function(e,t){var n=t.inputErrorClass,r=t.errorClass,o=e.closest(".popup__form").querySelector("#".concat(e.id,"-error"));e.classList.add(n),o.classList.add(r),o.textContent=e.validationMessage}(t,n)}(e,t,{inputErrorClass:a,errorClass:c}),L(e,l,o)}))}))}(e,I)}))})();