function solution(s) {
  var answer = s.split("").sort((a, b) => {
    if (a < b) {
      return 1;
    } else {
      return -1;
    }
  });
  return answer.join("");
}
