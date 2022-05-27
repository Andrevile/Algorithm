"use strict";

const fs = require("fs");
const [condition, ...arr] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

let answer = solution(condition, arr);

function solution(condition, arr) {
  const [C, N] = condition.split(" ").map((el) => Number(el));
  arr = arr.map((el) => Number(el));
  let result = Number.MIN_SAFE_INTEGER;
  let visited = Array.from({ length: N }, () => false);
  function DFS() {
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (visited[i]) sum += arr[i];
    }
    if (sum > result) result = sum;
    for (let i = 0; i < N; i++) {
      if (!visited[i] && sum + arr[i] < C) {
        visited[i] = true;
        DFS();
        visited[i] = false;
      }
    }
  }
  DFS();
  return result;
}

console.log(answer);

// function solution(c, arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;
//   function DFS(L, sum) {
//     if (sum > c) return;
//     if (L === n) {
//       answer = Math.max(answer, sum);
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }
