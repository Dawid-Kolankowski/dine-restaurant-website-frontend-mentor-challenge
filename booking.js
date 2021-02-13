var plusButton = document.getElementById('plus');
var minusButton = document.getElementById('minus');
var peopleCounter = 1;
var peopleContainer = document.getElementById('people__container');

function peopleHandle(operation) {
  if (operation == 'add') {
    peopleCounter += 1;
    peopleContainer.innerText = peopleCounter + ' people';
  } else if (operation == 'remove' && peopleCounter != 1) {
    peopleCounter -= 1;
    peopleContainer.innerText = peopleCounter + ' people';
  }
}

plusButton.addEventListener('click', function () {
  peopleHandle('add');
});

minusButton.addEventListener('click', function () {
  peopleHandle('remove');
});
