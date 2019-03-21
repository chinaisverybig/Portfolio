function showMoreFunction() {
  var dots = document.getElementsByClassName("dots");
  var moreText = document.getElementsByClassName("more");
  var btn = document.getElementsByClassName("showButton");

  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
      alert("the index position is:" + i + "and the length is:" + btn.length);
      if (dots[i].style.display === "none") {
        btn[i].style.transform = "rotate(0deg)";
        btn[i].style.transitionDuration = "0.35s ease";
        dots[i].style.display = "inline";
        moreText[i].style.display = "none";
      } else {
        btn[i].style.transform = "rotate(180deg)";
        btn[i].style.transitionDuration = "0.35s ease";
        dots[i].style.display = "none";
        moreText[i].style.display = "inline";
      }
    };
  }

}