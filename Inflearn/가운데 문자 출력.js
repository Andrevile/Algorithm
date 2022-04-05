"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  return input.length % 2 === 0
    ? input.substr(input.length / 2 - 1, 2)
    : input[parseInt(input.length / 2)];
}

console.log(answer);

// function solution(s) {
//   let answer;
//   let mid = Math.floor(s.length / 2);
//   if (s.length % 2 == 1) answer = s.substring(mid, mid + 1);
//   else answer = s.substring(mid - 1, mid + 1);
//   return answer;
// }
