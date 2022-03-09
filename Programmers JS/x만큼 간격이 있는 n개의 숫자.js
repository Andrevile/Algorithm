function solution(x, n) {
  let start = 0;
  var answer = Array.from({ length: n }, () => (start += x));
  return answer;
}
