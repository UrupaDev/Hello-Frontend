let lable = document.getElementsByClassName('header__burger-menu')[0];
let header = document.getElementsByClassName('header')[0];
let body = document.getElementsByClassName('body')[0];
let menu = document.getElementsByClassName('header__menu')[0];
burger.addEventListener("click", function(e) {
    burger.classList.toggle('header__burger-menu_active')
    header.classList.toggle('header_active')
    body.classList.toggle('lock')
}, false);

menu.addEventListener("click", function(e) {
    menu.classList.toggle('close')
})