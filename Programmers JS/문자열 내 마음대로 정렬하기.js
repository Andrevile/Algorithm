function solution(strings, n) {
  var answer = [];

  answer = strings.sort().sort((a, b) => {
    return a[n] < b[n] ? -1 : 1;
  });

  return answer;
}
