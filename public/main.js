var text = ["Welcome to Wigan Coders", "Learn HTML, CSS and JavaScript", "Start your journey into Web Development today!"];
var counter = 0;
var element = document.getElementById("changeText");
var inst = setInterval(change, 5000);

function change() {
  element.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
  // element.style.width = "100%"

  element.style.textAlign = 'centre';
  element.classList.toggle('disabled');
}
setInterval(function () {
  element.style.opacity = '0.66'

}, 3000)


// slider

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// lightbox popup
 var popup = document.querySelector('.popup-wrapper');
 var popupTimer = document.querySelector('.popup')
 var close = document.querySelector('.popup-close');

var popupTimer = setInterval(function () {
popup.style.display = 'block';
}, 120000);

close.addEventListener('click', () => {
popup.style.display = 'none';
});


// countdown timer
// Set the date we're counting down to
var countDownDate = new Date("dec 28, 2019 10:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="date"
  document.getElementById("date").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("date").innerHTML = "EXPIRED";
  }
}, 1000);


// clock

// const clock = document.querySelector('.clock');

// const tick = () => {
//   const now = new Date();

//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();

//   const html = `
//   '<span>${h}</span>
//   '<span>${m}</span>
//   '<span>${s}</span>

//   `;
//   clock.innerHTML = html;


// };
// setInterval(tick, 1000);

// navbar date

// const date = new Date();

// const today = date.dateFns.format(now, "dddd Do MMMM YYYY");

// console.log(today);


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 11000
  });


