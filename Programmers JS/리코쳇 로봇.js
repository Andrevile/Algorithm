function solution(board) {
  let answer = [];
  board = board.map((row) => row.split(""));

  let start_position;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") {
        start_position = [i, j];
      }
    }
  }

  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = BFS(board, dir, start_position);
  return queue.length > 0 ? queue[2] : -1;
}

function BFS(board, direction, start_position) {
  const queue = [[...start_position, 0]];
  while (queue.length) {
    const [current_row, current_col, count] = queue.shift();
    if (board[current_row][current_col] === "G") {
      return [current_row, current_col, count];
    }
    board[current_row][current_col] = "X";

    for (let [row, col] of direction) {
      let next_row = current_row + row;
      let next_col = current_col + col;
      while (
        0 <= next_row &&
        next_row < board.length &&
        0 <= next_col &&
        next_col < board[0].length
      ) {
        if (board[next_row][next_col] === "D") {
          break;
        }
        next_row += row;
        next_col += col;
      }
      next_row -= row;
      next_col -= col;
      if (board[next_row][next_col] !== "X") {
        queue.push([next_row, next_col, count + 1]);
      }
    }
  }
  return queue;
}
