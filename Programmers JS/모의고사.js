function solution(answers) {
  var answer = [];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) {
      count[0]++;
    }
    if (two[i % two.length] === answers[i]) {
      count[1]++;
    }
    if (three[i % three.length] === answers[i]) {
      count[2]++;
    }
  }
  count.forEach((el, idx) => {
    if (el === Math.max(...count)) {
      answer.push(idx + 1);
    }
  });

  return answer;
}
