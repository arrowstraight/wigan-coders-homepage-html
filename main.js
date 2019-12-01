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
  element.style.textAlign = 'centre';
  element.style.opacity = 0.9;
  element.classList.toggle('disabled');
}