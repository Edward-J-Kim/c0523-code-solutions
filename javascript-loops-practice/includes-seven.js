/* exported includesSeven */
function includesSeven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
      return true;
    }
  }
  return false;
}
