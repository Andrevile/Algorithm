"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  let stack = [];
  for (let x of input) {
    if (x !== ")") {
      stack.push(x);
    } else {
      while (stack[stack.length - 1] !== "(") {
        stack.pop();
      }
      stack.pop();
    }
  }
  return stack.join("");
}

console.log(answer);

// function solution(s) {
//   let answer;
//   let stack = [];
//   for (let x of s) {
//     if (x === ")") {
//       while (stack.pop() !== "(");
//     } else stack.push(x);
//   }
//   answer = stack.join("");
//   return answer;
// }
