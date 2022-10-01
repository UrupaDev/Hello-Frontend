let green = document.getElementById("green");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let switcher = document.getElementById("button");
let item = 0;

switcher.onclick = function () {
  item++;
  
  if (item == 1) {
    green.style.background = "green";
    red.style.background = "#aeaeae";
    yellow.style.background = "#aeaeae";
  }

  else if (item == 2) {
    green.style.background = "#aeaeae";
    red.style.background = "#aeaeae";
    yellow.style.background = "yellow";
  }

  else if (item == 3) {
    green.style.background = "#aeaeae";
    red.style.background = "red";
    yellow.style.background = "#aeaeae";
  }

   else if (item == 4) {
    red.style.background = "#aeaeae";
     item = 0;
   }
}

