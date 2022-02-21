function solution(numbers) {
  let sum = numbers.reduce((prev, cur, idx) => {
    return prev + cur;
  }, 0);
  var answer = (10 * 9) / 2 - sum;
  return answer;
}
