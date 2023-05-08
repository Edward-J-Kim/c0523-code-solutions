const width = 3;
const height = 5;
const area = width * height;
console.log('Value of area:', area);
console.log('typeof area:', typeof area);

const bill = 2;
const payment = 6;
const change = payment - bill;
console.log('Value of change:', change);
console.log('typeof change:', typeof change);

const quizzes = 95;
const midterm = 80;
const final = 89;
const grade = (quizzes + midterm + final) / 3;
console.log('Value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName = 'Edward ';
const lastName = 'Kim';
const fullName = `${firstName}${lastName}`;
console.log('Value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH = 4;
const isAcidic = pH < 7;
console.log('Value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount = 177;
const isSparta = headCount === 300;
console.log('Value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto = fullName;
motto = fullName + ' is the GOAT';
console.log('Value of motto:', motto);
console.log('typeof motto:', typeof motto);
