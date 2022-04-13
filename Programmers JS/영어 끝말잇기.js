function solution(n, words) {
  var answer = [];
  let answers = new Set();
  let turn = 0;
  let index = 0;
  let flag = 0;
  while (index !== words.length) {
    if (index % n === 0) turn++;
    if (!answers.has(words[index])) {
      if (
        index === 0 ||
        words[index - 1][words[index - 1].length - 1] === words[index][0]
      ) {
        answers.add(words[index]);
      } else {
        flag = 1;
        break;
      }
    } else {
      flag = 1;
      break;
    }
    index++;
  }
  answer.push((index % n) + 1, turn);
  return flag === 0 ? [0, 0] : answer;
}
