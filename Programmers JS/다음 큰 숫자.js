function solution(n) {
  var answer = 0;
  let num = n + 1;
  let flag = false;
  let n_count = n
    .toString(2)
    .split("")
    .filter((el) => el === "1").length;
  while (!flag) {
    let convertNum = num
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
    if (convertNum === n_count) break;

    num++;
  }
  answer = num;
  return answer;
}
