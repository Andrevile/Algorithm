function solution(n, info) {
  let answer = Array.from({ length: 11 }, () => 0);
  let maxScore = 0;
  getScoreBoards(0, 0, n, 0, 0, answer);

  function getScoreBoards(
    appeach,
    lion,
    totalShot,
    currentShot,
    index,
    scoreBoard
  ) {
    if (totalShot < currentShot) return;

    if (index > 10) {
      let diff = lion - appeach;
      if (maxScore < diff) {
        scoreBoard[10] = totalShot - currentShot;
        maxScore = diff;
        answer = scoreBoard;
      }
      return;
    }

    if (totalShot > currentShot) {
      let tmpBoard = [...scoreBoard];
      tmpBoard[10 - index] = info[10 - index] + 1;
      getScoreBoards(
        appeach,
        lion + index,
        totalShot,
        currentShot + info[10 - index] + 1,
        index + 1,
        tmpBoard
      );
    }

    if (info[10 - index] > 0) {
      getScoreBoards(
        appeach + index,
        lion,
        totalShot,
        currentShot,
        index + 1,
        scoreBoard
      );
    } else {
      getScoreBoards(
        appeach,
        lion,
        totalShot,
        currentShot,
        index + 1,
        scoreBoard
      );
    }
  }
  return maxScore <= 0 ? [-1] : answer;
}
