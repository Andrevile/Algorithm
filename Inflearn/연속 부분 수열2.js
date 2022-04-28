"use strict";

const fs = require("fs");
const [condition, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(condition, arr);

function solution(condition, arr) {
  let [N, M] = condition.split(" ").map((el) => Number(el));
  arr = arr.split(" ").map((el) => Number(el));

  let lt = 0;
  let sum = 0;
  let count = 0;
  for (let rt = 0; rt < N; rt++) {
    sum += arr[rt];
    while (sum > M) {
      sum -= arr[lt++];
    }
    if (sum <= M) {
      count += rt - lt + 1;
    }
  }
  return count;
}

console.log(answer);

// function solution(m, arr) {
//   let answer = 0,
//     sum = 0,
//     lt = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     while (sum > m) {
//       sum -= arr[lt++];
//     }
//     answer += rt - lt + 1;
//   }
// }
