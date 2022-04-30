function solution(n) {
  var answer = 0;
  let sum = 0;
  let lt = 1;
  for (let rt = 1; rt <= n; rt++) {
    sum += rt;
    if (sum === n) answer++;
    while (sum > n) {
      sum -= lt++;
      if (sum === n) answer++;
    }
  }
  return answer;
}
