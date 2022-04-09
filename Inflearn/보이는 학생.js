"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  let result = 0;
  arr = arr.split(" ").map((el) => Number(el));
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    if (max < arr[i]) {
      max = arr[i];
      result++;
    }
  }
  return result;
}

console.log(answer);

// function solution(arr) {
//   let answer = 1,
//     max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       answer++;
//       max = arr[i];
//     }
//   }
//   return answer;
// }
