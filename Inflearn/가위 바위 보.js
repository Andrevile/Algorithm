"use strict";

const fs = require("fs");
const [N, A, B] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, A, B);

function solution(N, A, B) {
  A = A.split(" ").map((el) => Number(el));
  B = B.split(" ").map((el) => Number(el));
  let match = {
    1: 2,
    2: 3,
    3: 1,
  };
  let result = [];
  for (let i = 0; i < N; i++) {
    if (match[A[i]] === B[i]) result.push("B");
    else if (A[i] === B[i]) result.push("D");
    else result.push("A");
  }
  return result;
}

answer.forEach((el) => console.log(el));

// function solution(a, b) {
//   let answer = "";
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === b[i]) answer += "D" + " ";
//     else if (a[i] === 1 && b[i] === 3) answer += "A" + " ";
//     else if (a[i] === 2 && b[i] === 1) answer += "A" + " ";
//     else if (a[i] === 3 && b[i] === 2) answer += "A" + " ";
//     else answer += "B" + " ";
//   }
//   return answer;
// }
