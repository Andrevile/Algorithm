function solution(number, k) {
  var answer = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    while (count < k && answer[answer.length - 1] < number[i]) {
      answer.pop();
      count++;
    }
    if (answer.length < number.length - k) {
      answer.push(number[i]);
    }
  }
  return answer.join("");
}
