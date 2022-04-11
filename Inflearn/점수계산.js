"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  arr = arr.split(" ").map((el) => Number(el));
  let score = 0;
  let count = 1;
  for (let i = 0; i < N; i++) {
    if (arr[i]) {
      score += count;
      count++;
    } else {
      count = 1;
    }
  }
  return score;
}

console.log(answer);

// function solution(arr) {
//   let answer = 0,
//     cnt = 0;
//   for (let x of arr) {
//     if (x === 1) {
//       cnt++;
//       answer += cnt;
//     } else {
//       cnt = 0;
//     }
//   }
//   return answer;
// }
