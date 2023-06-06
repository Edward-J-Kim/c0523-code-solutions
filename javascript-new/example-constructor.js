function ExampleConstructor() {}

console.log(
  'value of the protype prop. of exampleConstructor',
  ExampleConstructor.prototype
);
console.log(
  'typeof protype prop. of exampleConstructor',
  typeof ExampleConstructor.prototype
);

const newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor', newExampleConstructor);

const instanceOfExampleConstructor =
  newExampleConstructor instanceof ExampleConstructor;
console.log('instanceof ExampleConstructor', instanceOfExampleConstructor);
