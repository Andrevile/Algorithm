function solution(dartResult) {
  var answer = [];
  let instruction = dartResult.split(/[0-9]/).filter((el) => el !== "");
  let score = dartResult.split(/[^0-9]/).filter((el) => el !== "");

  for (let i = 0; i < 3; i++) {
    let temp = score[i];
    for (let k = 0; k < instruction[i].length; k++) {
      if (/[A-Z]/.test(instruction[i][k])) {
        temp = bonus(temp, instruction[i][k]);
      } else {
        temp = option(answer, temp, instruction[i][k]);
      }
    }
    answer.push(temp);
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}

function bonus(score, input) {
  switch (input) {
    case "S":
      return score ** 1;
    case "D":
      return score ** 2;
    case "T":
      return score ** 3;
  }
}

function option(scoreList, score, input) {
  switch (input) {
    case "*":
      if (scoreList.length === 0) {
        return score * 2;
      } else {
        scoreList[scoreList.length - 1] *= 2;
        return score * 2;
      }
    case "#":
      return -score;
  }
}
