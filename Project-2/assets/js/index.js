// fancy gallery
Fancybox.bind('[data-fancybox="gallery"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    );
  },
});

//swiper for news
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
  slidesPerView: 3,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 320px
    500: {
      slidesPerView: 1,

    },
    // when window width is >= 480px
    900: {
      slidesPerView: 2,

    },
    1100: {
      slidesPerView: 2,

    },
  }
});


// fixed manu on scroll
window.onscroll = function() {myFunction()};
  
  let header = document.getElementById("header__nav");
  let sticky = header.offsetTop;
      
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky_header");
    } else {
      header.classList.remove("sticky_header");
    }
  }

// Slicarousel for bg 
$(document).ready(function(){
  $(".the_slider").slicarousel({
     nbr_slides: 5,
     arrows: false,
     speed: 'slow',
     dot_nav: true,
  });
});

//burger menu
let btn = $('.buger-menu-btn');
let headerMenu = $('.header__menu');
let menuItems = $('.header__menu-item')

btn.on('click', function() {
  $(btn).toggleClass('active');
  $(headerMenu).toggleClass('menu-active');
});

menuItems.on('click', function() {
  $(menuItems).removeClass('active');
  $(btn).removeClass('active');
  $(headerMenu).removeClass('menu-active');
});


