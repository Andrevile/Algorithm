"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  return input.toUpperCase();
}

console.log(answer);

// function solution(input) {
//   let answer = "";
//   for (let x of s) {
//     if (x === x.toLowerCase()) answer += x.toUpperCase();
//   }
//   return answer;
// }
