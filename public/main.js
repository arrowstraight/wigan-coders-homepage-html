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
}, 25000);

close.addEventListener('click', () => {
popup.style.display = 'none';
});
