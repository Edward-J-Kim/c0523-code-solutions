import takeAChance from './take-a-chance.js';

const promise = takeAChance('Edward');
promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  });
