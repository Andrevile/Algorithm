"use strict";

const fs = require("fs");
const [board, moves] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(board, moves);

function solution(board, moves) {
  board = board
    .slice(2, board.length - 2)
    .split("],[")
    .map((el) => el.split(",").map((el) => Number(el)));
  moves = moves
    .slice(1, moves.length - 1)
    .split(",")
    .map((el) => Number(el))
    .reverse();
  let count = 0;
  let bucket = [];
  while (moves.length) {
    let column = moves.pop() - 1;
    let row = 0;
    while (row < board.length && board[row][column] === 0) {
      row++;
    }
    if (row < board.length) {
      let toy = board[row][column];
      board[row][column] = 0;
      count += pang(bucket, toy);
    }
  }
  return count;
}

function pang(bucket, currentToy) {
  if (bucket[bucket.length - 1] === currentToy) {
    bucket.pop();
    return 2;
  } else {
    bucket.push(currentToy);
    return 0;
  }
}

console.log(answer);

// function solution(board, moves) {
//   let answer = 0;
//   let stack = [];
//   moves.forEach((pos) => {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i][pos - 1] !== 0) {
//         let tmp = board[i][pos - 1];
//         board[i][pos - 1] = 0;
//         if (tmp === stack[stack.length - 1]) {
//           stack.pop();
//           answer += 2;
//         } else stack.push(tmp);
//         break;
//       }
//     }
//   });
// }
