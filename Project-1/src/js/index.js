const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 30,
  mobile: true,
  live: true
})
wow.init();

window.onscroll = function() {myFunction()};
      
      var header = document.getElementById("myHeader");
      var sticky = header.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }