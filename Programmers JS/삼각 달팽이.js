function solution(n) {
  var answer = [];
  let count = 1;
  let triangle = [];
  for (let i = 1; i <= n; i++) {
    let tempArr = Array.from({ length: i }, () => 1);
    triangle.push(tempArr);
  }
  let row = 0;
  let col = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) triangle[row++][col] = count++;
    row -= 1;
    col += 1;
    for (let i = 0; i < n - 1; i++) triangle[row][col++] = count++;
    row -= 1;
    col -= 2;
    for (let i = 0; i < n - 2; i++) triangle[row--][col--] = count++;
    row += 2;
    col += 1;
    n -= 3;
  }
  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      answer.push(triangle[i][j]);
    }
  }
  return answer;
}
