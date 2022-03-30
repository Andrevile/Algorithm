"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  return input.replace(/A/g, "#");
}

console.log(answer);

// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x === "A") answer += "#";
//     else answer += x;
//   }

//   return answer;
// }

// function solution(s) {
//   let answer = s;
//   answer = answer.replace(/A/g, "#");
//   return answer;
// }
