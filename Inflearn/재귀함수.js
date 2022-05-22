"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(Number(input));

function solution(input) {
  let answer = [];
  function recursive(input) {
    if (input < 1) return;
    recursive(input - 1);
    answer.push(input);
  }
  recursive(input);
  return answer;
}

console.log(answer.join(" "));

// function solution(n) {
//   function DFS(L) {
//     if (L === 0) return;
//     else {
//       console.log(L);
//       DFS(L - 1);
//     }
//   }
//   DFS(n);
// }
