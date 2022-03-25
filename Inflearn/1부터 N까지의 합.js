"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(Number(input));

function solution(input) {
  let result = 0;
  for (let i = 1; i <= input; i++) {
    result += i;
  }
  return result;
}

console.log(answer);

// function solution(n) {
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     answer = answer + i;
//   }
//   return answer;
// }
