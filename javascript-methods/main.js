const number1 = 5;
const number2 = 7;
const number3 = 8;
const maximumValue = Math.max(number1, number2, number3);
console.log('value of maximumValue:', maximumValue);

const heroes = ['spiderMan', 'batMan', 'ironMan', 'superMan'];
let randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

const library = [
  { title: 'Harry potter', author: 'J. K. Rowling' },
  { title: 'Lord of The Ring', author: 'J. R. R. Tolkien' },
  { title: 'Pachinko', author: 'Min Jin Lee' },
];
const lastBook = library.pop();
console.log(lastBook);
const firstBook = library.shift();
console.log(firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

const fullName = 'Edward Jaehoon Kim';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
