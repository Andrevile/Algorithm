"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  let string = input.replace(/[^A-Z]/g, "");
  return string.length;
}

console.log(answer);

// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//     // let num = x.charCodeAt();
//     // if (x >= 65 && num <= 90) answer++;
//     if (x === x.toUpperCase()) answer++;
//   }
//   return answer;
// }
