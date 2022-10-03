Fancybox.bind('[data-fancybox="gallery"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    );
  },
});

// fixed manu on scroll
window.onscroll = function() {myFunction()};
  
  var header = document.getElementById("header__menu");
  var sticky = header.offsetTop;
      
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky_header");
    } else {
      header.classList.remove("sticky_header");
    }
  }