function solution(n) {
  var answer = 0;
  let num_arr = n
    .toString()
    .split("")
    .sort((a, b) => b - a);
  answer = parseInt(num_arr.join(""));
  return answer;
}
