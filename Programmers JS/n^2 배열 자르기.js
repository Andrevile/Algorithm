function solution(n, left, right) {
  var answer = [];
  let index = 0;
  for (let i = left; i < right + 1; i++) {
    let rowIndex = parseInt(i / n);
    let colIndex = i % n;
    answer.push(Math.max(rowIndex + 1, colIndex + 1));
  }
  return answer;
}
