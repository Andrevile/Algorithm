"use strict";

const fs = require("fs");
const [N, arr, M] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr, M);

function solution(N, arr, M) {
  N = Number(N);
  arr = arr.split(" ").map((el) => Number(el));
  M = Number(M);
  let result = Number.MAX_SAFE_INTEGER;
  function DFS(count, current) {
    if (current >= M) {
      if (count < result) result = count;
      return;
    } else {
      for (let i = 0; i < N; i++) {
        DFS(count + 1, current + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return result;
}

console.log(answer);

// function solution(m, arr) {
//   let answer = Number.MAX_SAFE_INTEGER;
//   let n = arr.length;
//   function DFS(L, sum) {
//     if (sum > m) return;
//     if (L >= answer) return;
//     if (sum === m) {
//       answer = Math.min(answer, L);
//     } else {
//       for (let i = 0; i < n; i++) {
//         DFS(L + 1, sum + arr[i]);
//       }
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }
