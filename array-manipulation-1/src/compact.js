/* exported compact */
function compact(array) {
  let falsy;
  const truearr = [];
  for (let i = 0; i < array.length; i++) {
    falsy = Boolean(array[i]);
    if (falsy === true) truearr.push(array[i]);
  }
  return truearr;
}
