function solution(arr) {
  var answer = [...arr];
  let target = Math.min(...arr);
  answer = answer.filter((num) => num !== target);

  return answer.length === 0 ? [-1] : answer;
}
