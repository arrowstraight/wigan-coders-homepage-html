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