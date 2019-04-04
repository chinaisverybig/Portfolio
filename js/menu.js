var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    document.getElementById("goUpButton").style.bottom = "10rem";
  } else {
    document.getElementById("goUpButton").style.bottom = "2rem";
  }
  var currentScrollPos = window.pageYOffset;
  if (window.pageYOffset > 20) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("phone").style.top = "0";
      document.getElementById("laptop").style.top = "0";
    } else {
      document.getElementById("phone").style.top = "-3rem";
      document.getElementById("laptop").style.top = "-5rem";

    }

    prevScrollpos = currentScrollPos;
  }
  scrollFunction()

}
//referenced code from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp