function solution(s) {
  var answer = "";
  let arr = s.split(" ").map((el) => Number(el));
  answer = [Math.min(...arr), Math.max(...arr)].join(" ");
  return answer;
}
