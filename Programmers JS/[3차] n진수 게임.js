function solution(n, t, m, p) {
  var answer = "";
  let num = 0;
  let convert = "";
  let turn = 0;

  while (true) {
    let convertNum = num.toString(n);
    for (let i = 0; i < convertNum.length; i++) {
      if (answer.length >= t) return answer;
      if (turn % m === p - 1) {
        answer += convertNum[i].toUpperCase();
      }
      turn++;
    }

    num++;
  }
  return answer;
}
