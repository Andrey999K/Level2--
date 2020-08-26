document.addEventListener("DOMContentLoaded", () => {

    const buttonMenu = document.querySelector(".header__button-menu");
    const menu = document.querySelector(".header__bottom");
    buttonMenu.addEventListener("click", () => {
        menu.classList.toggle("menu-active");
    });

});