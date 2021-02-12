const buttons = document.querySelectorAll('div.events__buttons button');
const texts = document.querySelectorAll('div.events__texts div');
const images = document.querySelectorAll('div.events__images div');

function switchClass(id) {
  for (var i = 0; i < 3; i++) {
    if (i === id) {
      buttons[i].classList.add('active');
      texts[i].classList.add('active');
      images[i].classList.add('active');
    } else {
      buttons[i].classList.remove('active');
      texts[i].classList.remove('active');
      images[i].classList.remove('active');
    }
  }
}

buttons[0].addEventListener('click', function () {
  switchClass(0);
});
buttons[1].addEventListener('click', function () {
  switchClass(1);
});
buttons[2].addEventListener('click', function () {
  switchClass(2);
});
