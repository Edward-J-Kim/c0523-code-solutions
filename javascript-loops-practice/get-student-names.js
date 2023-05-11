/* exported getStudentNames */
function getStudentNames(students) {
  const property = [];
  for (let i = 0; i < students.length; i++) {
    property.push(students[i].name);
  }
  return property;
}
