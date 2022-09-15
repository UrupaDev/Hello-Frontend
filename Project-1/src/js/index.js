// wow library 
const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 30,
  mobile: true,
  live: true
})
wow.init();

// fixed manu on scroll
window.onscroll = function() {myFunction()};
      
  var header = document.getElementById("my-header");
  var sticky = header.offsetTop;
      
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

// burger menu
let burger = document.getElementsByClassName('header__burger-menu')[0];
let header__items = document.getElementsByClassName('header__items')[0];
let mode = document.getElementsByClassName('light-dark-mode')[0];
let body = document.getElementsByClassName('body')[0];
let menu = document.getElementsByClassName('header__menu-items')[0];
burger.addEventListener("click", function(e) {
    burger.classList.toggle('header__burger-menu_active');
    header__items.classList.toggle('header__items_active');
    mode.classList.toggle('mode_active');
    body.classList.toggle('lock')
}, false);

menu.addEventListener("click", function(e) {
  menu.classList.toggle('close')
})

// video button play/pause
$('.video').parent().click(function () {
  
  if ($(this).children(".video").get(0).paused){        
    $(this).children(".video").get(0).play();   
    $(this).children(".playpause").fadeOut();
    } else {       
    $(this).children(".video").get(0).pause();
    $(this).children(".playpause").fadeIn();
    }
});

// light/dark mode
$(".checkbox").click(function() {
  $(".body").toggleClass(".dark_mode");
});

