function solution(sequence, k) {
  var answer = [];
  let p1 = 0;
  let p2 = 0;
  let sum = sequence[0];
  while (p2 < sequence.length) {
    if (sum === k) {
      answer.push([p1, p2]);
      sum -= sequence[p1++];
      sum += sequence[++p2];
    } else if (sum > k) {
      sum -= sequence[p1];
      p1++;
    } else {
      p2++;
      sum += sequence[p2];
    }
  }
  answer.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - a[0] - (b[1] - b[0]);
    }
  });

  return answer[0];
}
