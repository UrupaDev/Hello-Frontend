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

// video play
$(function () {
  var $videoContainer = $('.video'),
     $videoControls = $('.video-control'),
     $video = $('.my-video')[0];
     $videoControls.click(function () {
     if ($video.paused) {
        $video.play();
        $videoContainer.addClass('video-is-playing');
     } else {
        $video.pause();
        $videoContainer.removeClass('video-is-playing');
     }
  });
});

// dark mode
let checkbox = $("#dark-mode");
checkbox.change(function () {
if(checkbox.is(':checked')){
$('body').addClass('dark-mode')
} else {
$('body').removeClass('dark-mode')
}
}); 
