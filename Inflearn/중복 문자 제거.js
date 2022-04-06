"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  let result = "";
  let alphaSet = new Set();

  for (let x of input) {
    if (!alphaSet.has(x)) {
      result += x;
      alphaSet.add(x);
    }
  }
  return result;
}

console.log(answer);

// function solution(s) {
//   let answer = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) === i) answer += s[i];
//   }
//   return answer;
// }
