var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
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
}
//referenced code from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp