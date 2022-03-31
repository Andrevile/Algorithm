function solution(n, a, b) {
  var answer = 1;

  while (Math.ceil(a / 2) !== Math.ceil(b / 2)) {
    answer++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return answer;
}
