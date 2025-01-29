document.addEventListener("DOMContentLoaded", function() {
    var myBtn = document.getElementById("myBtn");
    myBtn.style.display = "none";
  });
  

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    var myBtn = document.getElementById("myBtn");
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      myBtn.style.display = "block";
    } else {
      myBtn.style.display = "none";
    }
  }