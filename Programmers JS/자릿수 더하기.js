function solution(n) {
  var answer = 0;

  let temp = n.toString().split("");
  temp.forEach((num) => (answer += Number(num)));
  return answer;
}
