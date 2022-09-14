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


