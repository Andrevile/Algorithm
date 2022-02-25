function solution(n) {
  var answer = 0;
  let third = [];
  while (n > 0) {
    let add = n % 3;
    n = parseInt(n / 3);
    third.push(add);
  }

  third.reverse().forEach((el, idx) => {
    answer += el * 3 ** idx;
  });

  return answer;
}
