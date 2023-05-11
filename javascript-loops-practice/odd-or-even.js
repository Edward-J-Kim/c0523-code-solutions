/* exported oddOrEven */
function oddOrEven(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      result.push('odd');
    } else {
      result.push('even');
    }
  }
  return result;
}
