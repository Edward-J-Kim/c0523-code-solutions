const book = [
  { isbn: '1234', title: 'Harry Potter', author: 'J.K Rowling' },
  { isbn: '2345', title: 'LOTR', author: 'JRR' },
  { isbn: '4343', title: 'Narnia', author: 'C. S. Lewis' },
];
console.log('value of the book:', book);
console.log('typeof book:', typeof book);

const jsonBook = JSON.stringify(book);
console.log('value of JSON array:', jsonBook);
console.log('Typeof JSON array:', typeof jsonBook);

const student = '{"id" : "1521","name" : "st"}';
console.log('value of JSON String:', student);
console.log('typeof JSON String:', typeof student);

const javaStudent = JSON.parse(student);
console.log('value of JSON Parse:', javaStudent);
console.log('Typeof JSON Parse:', typeof javaStudent);
