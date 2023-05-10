function convertMinutesToSecond(minutes) {
  const result = minutes * 60;
  return result;
}
const convertMinutesToSecondResult = convertMinutesToSecond(5);
console.log(convertMinutesToSecondResult);

function greeting(name) {
  const greet = 'Hey, ' + name;
  return greet;
}
const greetResult = greeting('Beavis');
console.log(greetResult);

function getArea(width, height) {
  const result = width * height;
  return result;
}
const getAreaResult = getArea(17, 42);
console.log(getAreaResult);

function getFirstName(person) {
  const result = person.firstName;
  return result;
}
const getFirstNameResults = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log(getFirstNameResults);

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}
const getLastElementResults = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('value og getLastElementResults:', getLastElementResults);
