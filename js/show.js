function showMoreFunction() {
  var dots = document.getElementsByClassName("dots");
  var moreText = document.getElementsByClassName("more");
  var btn = document.getElementsByClassName("showButton");
  var blocks = document.getElementsByClassName("block");

  for (var i = 0; i < blocks.length; i++) {
    // console.log('i:', i);
    let btn = blocks[i].getElementsByClassName('showButton')[0];
    let dot = blocks[i].getElementsByTagName('p')[0].getElementsByClassName('dots')[0];
    let moreText = blocks[i].getElementsByTagName('p')[0].getElementsByClassName('more')[0];
    btn.onclick = function() {
      more(btn, dot, moreText);
    }
  }
}

var more = function(btn, dot, moreText) {
  if (dot.style.display === "none") {
    btn.style.transform = "rotate(0deg)";
    btn.style.transitionDuration = "0.35s ease";
    dot.style.display = "inline";
    moreText.style.display = "none";
  } else {
    btn.style.transform = "rotate(180deg)";
    btn.style.transitionDuration = "0.35s ease";
    dot.style.display = "none";
    moreText.style.display = "inline";
  }
}