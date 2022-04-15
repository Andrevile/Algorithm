function solution(word) {
  var answer = 0;
  let multiple = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  let order = [781, 156, 31, 6, 1];
  word = word.split("");
  for (let i = 0; i < word.length; i++) {
    answer += 1 + order[i] * multiple[word[i]];
  }

  return answer;
}
