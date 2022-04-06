function solution(brown, yellow) {
  var answer = [];
  for (let row = 1; row < Math.ceil(yellow / 2) + 1; row++) {
    if (yellow % row === 0) {
      let col = yellow / row;
      let border = row * 2 + (col + 2) * 2;
      if (border === brown) {
        answer = [col + 2, row + 2];
        break;
      }
    }
  }
  return answer;
}
