"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(parseInt(input));

function solution(input) {
  return Math.ceil(input / 12);
}

console.log(answer);

// function solution(n) {
//   let answer = Math.ceil(n / 12);
//   return answer;
// }
