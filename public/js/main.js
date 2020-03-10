let links = document.querySelectorAll(".open-popup-link");
let popupModal = document.querySelectorAll(".popup");

links.forEach((element) => {
    element.addEventListener("click", activePopup);
});

function activePopup() {
    if (this.getAttribute("data-src").slice(1)) {
        console.log('есть!')
    }
}