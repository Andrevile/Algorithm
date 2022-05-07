"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  let stack = [];
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") stack.push(input[i]);
    else {
      if (input[i - 1] === "(") {
        stack.pop();
        result += stack.length;
      } else {
        stack.pop();
        result++;
      }
    }
  }
  return result;
}

console.log(answer);

// function solution(s) {
//   let answer = 0;
//   let stack = [];
//   for (let i = 0; i < s.lengtt; i++) {
//     if (s[i] === "(") stack.push(s[i]);
//     else {
//       stack.pop();
//       if (s[i - 1] === "(") answer += stack.length;
//       else answer += 1;
//     }
//   }
// }
