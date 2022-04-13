"use strict";

const fs = require("fs");
const [N, ...arr] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  let result = [];
  arr = arr.map((row) => row.split(" ").map((el) => Number(el)));

  let leftToRight = 0;
  let rightToLeft = 0;
  for (let i = 0; i < N; i++) {
    let rowSum = 0;
    let colSum = 0;

    for (let j = 0; j < N; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }
    leftToRight += arr[i][i];
    rightToLeft += arr[i][N - i - 1];
    result.push(rowSum);
    result.push(colSum);
  }
  result.push(leftToRight);
  result.push(rightToLeft);
  return Math.max(...result);
}

console.log(answer);

// function solution(arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;
//   let sum1 = (sum2 = 0);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       sum1 += arr[i][j];
//       sum2 += arr[j][i];
//     }
//     answer = Math.max(answer, sum1, sum2);
//   }
//   sum1 = sum2 = 0;
//   for (let i = 0; i < n; i++) {
//     sum1 += arr[i][i];
//     sum2 += arr[i][n - i - 1];
//   }
//   answer = Math.max(answer, sum1, sum2);
//   return answer;
// }
