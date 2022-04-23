function solution(board) {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== 0 && i > 0 && j > 0) {
        board[i][j] =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
      }
      if (board[i][j] > answer) answer = board[i][j];
    }
  }

  return answer ** 2;
}
