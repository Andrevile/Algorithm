function solution(n) {
  var answer = "";
  let match = {
    1: 1,
    2: 2,
    0: 4,
  };

  while (n !== 0) {
    let q = n % 3;
    answer = match[q].toString() + answer;
    n = parseInt(n / 3);
    if (q === 0) {
      n--;
    }
  }

  return answer;
}
