function solution(n) {
  var answer = Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : -1;

  return answer !== -1 ? (answer + 1) ** 2 : -1;
}
