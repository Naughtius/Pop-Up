let links = document.querySelectorAll(".open-popup-link");
let popupModals = document.querySelectorAll(".popup");
let closeBtns = document.querySelectorAll(".popup > i");
let createBtnClose;

/*Клик по ссылке для открытия модального окна*/
links.forEach(element => {
    element.addEventListener("click", activePopup);
});

function activePopup() {
    document.querySelector("body").classList.add("popup-overflow");
    document.getElementById(this.getAttribute("data-src").slice(1)).classList.add("popup-active");
}

/*Добавление кнопки закрытия окна*/
popupModals.forEach(element => {
    createBtnClose = document.createElement("i");
    element.prepend(createBtnClose);
    createBtnClose.classList.add("fa", "fa-times");
});

/*Закрытие окна при клике вне области*/
window.addEventListener("mouseup", e => {
    popupModals.forEach(element => {
        if (e.target !== element && !element.contains(e.target) || element.querySelector("i").contains(e.target)) {
            element.classList.remove("popup-active");
            document.querySelector("body").classList.remove("popup-overflow");
        }
    });
});

/*Закрытие окна при клике на кнопку*/
closeBtns.forEach(element => {
    element.addEventListener("click", () => {
        element.parentNode.classList.remove("popup-active");
        document.querySelector("body").classList.remove("popup-overflow");
    });
});