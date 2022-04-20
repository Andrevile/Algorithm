"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  N = Number(N);
  arr = arr.split(" ");
  let SUM_MAX = Number.MIN_SAFE_INTEGER;
  let ORIGIN_MAX = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    let sum = arr[i]
      .split("")
      .reduce((acc, cur) => Number(acc) + Number(cur), 0);

    if (SUM_MAX < sum) {
      SUM_MAX = sum;
      ORIGIN_MAX = Number(arr[i]);
    }
    if (SUM_MAX === sum) {
      if (ORIGIN_MAX < Number(arr[i])) ORIGIN_MAX = Number(arr[i]);
    }
  }

  return ORIGIN_MAX;
}

console.log(answer);

// function solution(n, arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;

//   for (let x of arr) {
//     let sum = 0,
//       tmp = x;
//     while (tmp) {
//       sum += tmp % 10;
//       tmp = parseInt(tmp / 10);
//     }
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
// }
