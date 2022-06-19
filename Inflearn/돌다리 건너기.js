"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  input = Number(input);
  const dp = Array.from({ length: 46 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= input + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[input + 1];
}

console.log(answer);

// function solution(n) {
//   let answer = 0;
//   let dy = Array.from({ length: n + 1 }, () => 0);
//   dy[1] = 1;
//   dy[2] = 2;
//   for (let i = 3; i <= n; i++) {
//     dy = dy[i - 2] + dy[i - 1];
//   }
//   answer = dy[n];
//   return answer;
// }
