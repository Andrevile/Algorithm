"use strict";

const fs = require("fs");
const [N, A, M, B] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, A, M, B);

function solution(N, A, M, B) {
  N = Number(N);
  A = A.split(" ").sort((a, b) => a - b);
  M = Number(M);
  B = B.split(" ").sort((a, b) => a - b);
  let answer = [];
  let pa = 0;
  let pb = 0;
  while (pa < N && pb < M) {
    if (A[pa] === B[pb]) {
      answer.push(A[pa]);
      pa++;
      pb++;
    } else if (A[pa] < B[pb]) {
      pa++;
    } else {
      pb++;
    }
  }
  return answer;
}

console.log(answer.join(" "));

// function solution(arr1, arr2) {
//   let answer = [];
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   let p1 = (p2 = 0);
//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] === arr2[p2]) {
//       answer.push(arr1[p1++]);
//       p2++;
//     } else if (arr1[p1] < arr2[p2]) p1++;
//     else p2++;
//   }
//   return answer;
// }
