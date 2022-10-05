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
   "<i class='fa fa-chevron-right'></i>"]
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
