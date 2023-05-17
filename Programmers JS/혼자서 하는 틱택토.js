function solution(board) {
  //선공이 'O' 후공이 'X'
  //     O의 개수-X의 개수=0 or 1
  // O가 이겼다면 O의 개수는 X보다 한 개 많음.
  // X가 이겼다면 O의 개수와 X의 개수는 같음.
  // O와 X는 동시에 이길 수 없음.
  let answer = 0;
  let X_count = 0;
  let O_count = 0;
  let X_isFinish = false;
  let O_isFinish = false;
  board = board.map((row) => row.split(""));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "X") {
        X_count += 1;
      } else if (board[i][j] === "O") {
        O_count += 1;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "X" && checkAttackerFinishGame(board, [i, j])) {
        X_isFinish = true;
      }
      if (board[i][j] === "O" && checkAttackerFinishGame(board, [i, j])) {
        O_isFinish = true;
      }
    }
  }

  if (X_count === O_count) {
    if (!X_isFinish && !O_isFinish) {
      return 1;
    }
    if (X_isFinish && !O_isFinish) {
      return 1;
    }
  } else if (X_count + 1 === O_count) {
    if (!X_isFinish && !O_isFinish) {
      return 1;
    }
    if (!X_isFinish && O_isFinish) {
      return 1;
    }
  }

  return 0;
}

function checkAttackerFinishGame(board, attacker_pos) {
  const [row, col] = attacker_pos;
  const attacker = board[row][col];
  // - 판단
  if (col + 2 < 3) {
    if (board[row][col + 1] === attacker && board[row][col + 2] === attacker) {
      return true;
    }
  }
  // ㅣ 판단
  if (row + 2 < 3) {
    if (board[row + 1][col] === attacker && board[row + 2][col] === attacker) {
      return true;
    }
  }
  // \ 판단
  if (row + 2 < 3 && col + 2 < 3) {
    if (
      board[row + 1][col + 1] === attacker &&
      board[row + 2][col + 2] === attacker
    ) {
      return true;
    }
  }

  // /판단
  if (row + 2 < 3 && col >= 2) {
    if (
      board[row + 1][col - 1] === attacker &&
      board[row + 2][col - 2] === attacker
    ) {
      return true;
    }
  }

  return false;
}
