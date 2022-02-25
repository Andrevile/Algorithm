function solution(left, right) {
  var answer = 0;
  for (let i = left; i < right + 1; i++) {
    let temp = get_divisor(i);
    if (temp % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

function get_divisor(num) {
  let count = 0;
  for (let i = 1; i < num + 1; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count;
}
