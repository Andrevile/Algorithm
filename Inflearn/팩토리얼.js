"use strict";

const fs = require("fs");
const N = fs.readFileSync("./dev/stdin").toString();

let answer = solution(Number(N));

function solution(N) {
  function factorial(N) {
    if (N === 1) return 1;
    return N * factorial(N - 1);
  }
  const result = factorial(N);
  return result;
}

console.log(answer);

// function solution(n) {
//   let answer;
//   function DFS(n) {
//     if (n === 1) return 1;
//     else return n * DFS(n - 1);
//   }
//   answer = DFS(n);
//   return answer;
// }
