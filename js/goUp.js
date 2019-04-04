var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    document.getElementById("goUpButton").style.bottom = "11rem";
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

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("goUpButton").style.display = "block";
  } else {
    document.getElementById("goUpButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}