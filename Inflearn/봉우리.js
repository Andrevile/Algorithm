"use strict";

const fs = require("fs");
const [N, ...arr] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = solution(Number(N), arr);

function solution(N, arr) {
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  arr = arr.map((row) => row.split(" ").map((el) => Number(el)));
  arr = Array.from(Array(N + 2), (_, i) => {
    if (i === 0 || i === N + 1) {
      return Array(N + 2).fill(0);
    } else {
      return [0, ...arr[i - 1], 0];
    }
  });
  let result = 0;

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      let flag = 0;
      let current = arr[i][j];
      for (let dir of direction) {
        let [dy, dx] = [i + dir[0], j + dir[1]];
        if (current < arr[dy][dx]) flag = 1;
      }
      if (flag === 0) {
        result++;
      }
    }
  }
  return result;
}

console.log(answer);

// function solution(arr) {
//   let answer = 0;
//   let n = arr.length;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       let flag = 1;
//       for (let k = 0; k < 4; k++) {
//         let nx = i + dx[k];
//         let ny = j + dy[k];

//         if (
//           nx >= 0 &&
//           nx < n &&
//           ny >= 0 &&
//           ny < n &&
//           arr[nx][ny] >= arr[i][j]
//         ) {
//           flag = 0;
//           break;
//         }
//       }
//       if (flag) answer++;
//     }
//   }
// }
