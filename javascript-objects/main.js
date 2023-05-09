const student = { firstName: 'Mia', lastName: 'Lee', age: 33 };
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'therapist';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

const vehicle = { make: 'Honda', model: 'Civic', year: 2014 };
vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = { name: 'Latte', type: 'maltipoo' };
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
