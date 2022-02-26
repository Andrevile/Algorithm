function solution(d, budget) {
  var answer = 0;
  d = d.sort((a, b) => a - b);
  let i = 0;
  while (true) {
    if (budget - d[i] >= 0) {
      budget -= d[i];
      i++;
      answer++;
    } else {
      break;
    }
  }
  return answer;
}
