function solution(rows, columns, queries) {
  let answer = [];
  let board = [];
  for (let i = 1; i < rows + 1; i++) {
    let temp = [];
    for (let j = 1; j < columns + 1; j++) {
      temp.push((i - 1) * columns + j);
    }
    board.push(temp);
  }

  for (let query of queries) {
    let numSet = [];
    board = rotate(query, board, numSet);
    answer.push(Math.min(...numSet));
  }

  return answer;
}

function rotate(query, board, numSet) {
  let start_row = query[0] - 1;
  let start_col = query[1] - 1;
  let finish_row = query[2] - 1;
  let finish_col = query[3] - 1;
  numSet.push(board[start_row][start_col]);
  //왼쪽 세로
  for (let i = start_row; i < finish_row; i++) {
    let temp = board[i][start_col];

    board[i][start_col] = board[i + 1][start_col];
    numSet.push(board[i][start_col]);
    board[i + 1][start_col] = temp;
  }
  //아래 가로
  for (let i = start_col; i < finish_col; i++) {
    let temp = board[finish_row][i];

    board[finish_row][i] = board[finish_row][i + 1];
    numSet.push(board[finish_row][i]);
    board[finish_row][i + 1] = temp;
  }
  //오른쪽 세로
  for (let i = finish_row; i > start_row; i--) {
    let temp = board[i][finish_col];
    board[i][finish_col] = board[i - 1][finish_col];
    numSet.push(board[i][finish_col]);
    board[i - 1][finish_col] = temp;
  }
  // 위쪽 가로
  for (let i = finish_col; i > start_col + 1; i--) {
    let temp = board[start_row][i];
    board[start_row][i] = board[start_row][i - 1];
    numSet.push(board[start_row][i]);
    board[start_row][i - 1] = temp;
  }

  return board;
}
