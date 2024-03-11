//client section
let copyr = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copyr);
let copyl = document.querySelector(".logos-slide-left").cloneNode(true);
document.querySelector(".logos-left").appendChild(copyl);



var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();

//     window.addEventListener("load", ()=>{

let cards = document.querySelectorAll(".service .card");
let cards2 = document.querySelectorAll(".casestudy .card2");


let serviceSubheading = document.querySelector(".service h4");
let serviceHeading = document.querySelector(".section-heading");

let promoLeft = document.querySelector(".promo .left");
let promoRight = document.querySelector(".promo .right");

let caseStudyLeft = document.querySelector(".casestudy .left");
let caseStudyRight = document.querySelector(".casestudy .right");

document.addEventListener('DOMContentLoaded', function() {
  var sections = document.querySelectorAll('section');

  console.log(sections);

  var options = {
    threshold: 0.3 // Adjust the threshold as needed (0.5 means at least 50% of the section is visible)
  };

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      // Check if the section is in view
      if (entry.isIntersecting) {
        // Apply the animation by changing the opacity property
        entry.target.classList.add("show-animation");
        // Stop observing the section to avoid multiple triggers
        observer.unobserve(entry.target);
      }else{
        entry.target.classList.remove("show-animation");
      }
    });
  }, options);

  // Observe each section
  sections.forEach(function(section) {
    observer.observe(section);
  });
});


const cardContainer = document.querySelector('.team-member');
const cardWidth = document.querySelector('.team-card').offsetWidth + 20; // Adjust margin as needed
let scrollPosition = 0;

function scrollCards() {
    scrollPosition += cardWidth;
    if (scrollPosition > cardContainer.scrollWidth - cardContainer.offsetWidth) {
        scrollPosition = 0;
    }
    cardContainer.scrollLeft = scrollPosition;
}

setInterval(scrollCards, 1000); // Adjust the interval as needed (in millise










