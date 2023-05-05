function solution(targets) {
  targets.sort((a, b) => b[0] - a[0]);

  let answer = 1;
  let checkPoint = targets[0][0];
  for (let i = 1; i < targets.length; i++) {
    const [start, end] = targets[i];

    if (end <= checkPoint) {
      checkPoint = start;
      answer++;
    }
  }

  return answer;
}

function solution(targets) {
  targets.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let answer = 1;
  let checkPoint = targets[0][1];
  for (let i = 1; i < targets.length; i++) {
    const [start, end] = targets[i];

    if (start >= checkPoint) {
      checkPoint = end;
      answer++;
    } else {
      if (end < checkPoint) {
        checkPoint = end;
      }
    }
  }

  return answer;
}
