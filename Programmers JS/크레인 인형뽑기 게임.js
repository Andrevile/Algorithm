function solution(board, moves) {
  console.log(board);
  let stack = [];
  let answer = 0;
  for (let i = 0; i < moves.length; i++) {
    let row = 0;
    let toy;
    while (row < board.length) {
      if (board[row][moves[i] - 1] === 0) {
        row++;
      } else {
        toy = board[row][moves[i] - 1];
        board[row][moves[i] - 1] = 0;
        break;
      }
    }
    if (stack.length > 0 && stack[stack.length - 1] === toy) {
      stack.pop();
      answer += 2;
    } else {
      if (toy !== undefined) {
        stack.push(toy);
      }
    }
  }

  return answer;
}
