let open = document.getElementsByClassName('button')[0];
let close = document.getElementsByClassName('alert')[0];

open.addEventListener("click", function(e) {
  close.classList.add('alert_active');
}, false);
