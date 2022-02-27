function solution(sizes) {
  var answer = 0;
  let max = 0;
  let min = 0;
  for (let item of sizes) {
    if (max < Math.max(...item)) {
      max = Math.max(...item);
    }
    if (min < Math.min(...item)) {
      min = Math.min(...item);
    }
  }
  answer = max * min;

  return answer;
}
