let on = false;

const $container = document.querySelector('.container');
const $bulb = document.querySelector('.bulb');

$bulb.addEventListener('click', function (event) {
  on = !on;
  if (on) {
    $container.className = 'container -bright';
    $bulb.className = 'bulb -power';
  } else {
    $container.className = 'container';
    $bulb.className = 'bulb';
  }
});
