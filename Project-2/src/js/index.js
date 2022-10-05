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
     dot_nav: false,
  });
});

// $(".the_slider").slicarousel({
//   "autoplay": {
//               "enabled": true,
//               "direction": "ltr" 
//           },
// });