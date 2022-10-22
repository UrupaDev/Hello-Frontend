// Slicarousel for bg 
$(document).ready(function(){
  $(".the_slider").slicarousel({
     nbr_slides: 3,
     arrows: false,
     speed: 'normal',
     dot_nav: false,
  });
});

$(".the_slider").slicarousel({
  "autoplay": {
              "enabled": true,
              "direction": "ltr" 
          },
});


// swiper for catalog
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  slidesPerView: 5,
  spaceBetween: 15,

  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    796: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1237: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
});

//own carusel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items : 9,
    margin : 27,
    nav: true,
    autoplay:true,
    navText: [
   "<i class='fa fa-chevron-left'></i>",
   "<i class='fa fa-chevron-right'></i>"],
   loop: true,
   responsiveClass: true,
    responsive:{
        0:{
            items:2,
        },
        768:{
            items:6,
        },
        1000:{
            items:7, 
        }
    }
  }); 
});

// custom arrows
var owl = $('.owl-carousel');
owl.owlCarousel();
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

// burger menu
let burger = document.getElementsByClassName('header__burger-menu')[0];
let header__items = document.getElementsByClassName('header__items')[0];
let body = document.getElementsByClassName('body')[0];
let menu = document.querySelectorAll('.header__menu-item')[0];

burger.addEventListener("click", function(e) {
    burger.classList.toggle('header__burger-menu_active');
    header__items.classList.toggle('header__items_active');
}, false);

// close burger menu if click menu items
$('.header__menu-item').click (function () {
  $('.header__menu-item').toggleClass('header__burger-menu_active');
  $('.header__burger-menu').toggleClass('header__burger-menu_active');
  $('.header__items').toggleClass('header__items_active');
});