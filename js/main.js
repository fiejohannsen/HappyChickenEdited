"use strict";

function showLoader(show) {
  let loader = document.querySelector('#loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}

function navIcon(x) {
  x.classList.toggle("change");
  var x = document.getElementById("navContainer");
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}
}



// Sliders
let aboutSlideIndex = 1;
showAboutSlides(aboutSlideIndex);

function plusAboutSlides(n) {
  showAboutSlides(aboutSlideIndex += n);
}

function currentAboutSlide(n) {
  showAboutSlides(aboutSlideIndex = n);
}

function showAboutSlides(n) {
  let i;
  let aboutSlides = document.getElementsByClassName("aboutSlides");
  let aboutDots = document.getElementsByClassName("aboutDot");
  if (n > aboutSlides.length) {
    aboutSlideIndex = 1
  }
  if (n < 1) {
    aboutSlideIndex = aboutSlides.length
  }
  for (i = 0; i < aboutSlides.length; i++) {
    aboutSlides[i].style.display = "none";
  }
  for (i = 0; i < aboutDots.length; i++) {
    aboutDots[i].className = aboutDots[i].className.replace(" active", "");
  }
  aboutSlides[aboutSlideIndex - 1].style.display = "flex";
  aboutDots[aboutSlideIndex - 1].className += " active";
}

let partnerSlideIndex = 1;
showPartnerSlides(partnerSlideIndex);

function plusPartnerSlides(n) {
  showPartnerSlides(partnerSlideIndex += n);
}

function currentPartnerSlide(n) {
  showPartnerSlides(partnerSlideIndex = n);
}

function showPartnerSlides(n) {
  var i;
  var partnerSlides = document.getElementsByClassName("partnerSlides");
  var partnerDots = document.getElementsByClassName("partnerDot");
  if (n > partnerSlides.length) {
    partnerSlideIndex = 1
  }
  if (n < 1) {
    partnerSlideIndex = partnerSlides.length
  }
  for (i = 0; i < partnerSlides.length; i++) {
    partnerSlides[i].style.display = "none";
  }
  for (i = 0; i < partnerDots.length; i++) {
    partnerDots[i].className = partnerDots[i].className.replace(" active", "");
  }
  partnerSlides[partnerSlideIndex - 1].style.display = "flex";
  partnerDots[partnerSlideIndex - 1].className += " active";
}

// Animation on scroll
(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('is-visible');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();


// Show more buttons
function showMore(info) {
  var dots = document.querySelector(`.aboutSlides[data-info="${info}"] .dots`);
  var moreText = document.querySelector(`.aboutSlides[data-info="${info}"] .more`);
  var btnText = document.querySelector(`.aboutSlides[data-info="${info}"] .moreBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre";
    moreText.style.display = "inline";
  }
}
