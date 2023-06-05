const $body = document.querySelector('h1');

let count = 4;
$body.textContent = count;

const timerId = setInterval(() => {
  count--;
  if (count === 0) {
    $body.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  } else {
    $body.textContent = count;
  }
}, 1000);
