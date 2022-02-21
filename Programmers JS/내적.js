function solution(a, b) {
  var answer = a.reduce((prev, cur, idx) => prev + a[idx] * b[idx], 0);
  return answer;
}
