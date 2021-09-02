var $char = document.querySelectorAll('span');
var i = 0;
var success = 0;
var fail = 0;
var $success = document.querySelector('.success');
var $fail = document.querySelector('.fail');
var $accuracy = document.querySelector('.accuracy');

function check(event) {
  if (event.key === $char[i].textContent) {
    $char[i].className = 'passed';
    $char[i + 1].className = 'underlined';
    success += 1;
    i += 1;
  } else {
    $char[i].className = 'error';
    fail += 1;
  }
}

function showAccuracy() {
  if (i === $char.length - i) {
    $success.textContent += success;
    $fail.textContent += fail;
    var accuracy = (success / (success + fail) * 100).toFixed(2);
    $accuracy.textContent += accuracy;
  }
}

function askAgain(event) {

}

window.addEventListener('keydown', check);
window.addEventListener('keydown', askAgain);
showAccuracy();
