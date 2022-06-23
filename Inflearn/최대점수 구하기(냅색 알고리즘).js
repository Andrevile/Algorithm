"use strict";

const fs = require("fs");
const [condition, ...arr] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

let answer = solution(condition, arr);

// function solution(condition, arr) {
//   const [N, M] = condition.split(" ").map((el) => Number(el));
//   arr = arr.map((el) => el.split(" ").map((el) => Number(el)));
//   const dp = Array.from({ length: M + 1 }, () => 0);

//   for (let i = 0; i < arr.length; i++) {
//     const [score, time] = arr[i];
//     for (let j = time; j <= M; j++) {
//       dp[j] = Math.max(dp[j], dp[j - time] + score);
//     }
//   }

//   return Math.max(...dp);
// }

console.log(answer);

function solution(condition, arr) {
  const [N, M] = condition.split(" ").map((el) => Number(el));
  arr = arr.map((el) => el.split(" ").map((el) => Number(el)));
  const dp = Array.from({ length: M + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    const [score, time] = arr[i];
    for (let j = M; j >= time; j--) {
      dp[j] = Math.max(dp[j], dp[j - time] + score);
    }
  }
  return Math.max(...dp);
}

function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
  return answer;
}
