function solution(arr, divisor) {
  var answer = [];
  let newArr = [...arr].sort((a, b) => a - b);
  answer = newArr.filter((el) => el % divisor === 0);

  return answer.length === 0 ? [-1] : answer;
}
