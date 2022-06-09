"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  let stack = [];
  for (let x of input) {
    if (x === "(") stack.push(x);
    else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(x);
      }
    }
  }
  return stack.length > 0 ? "NO" : "YES";
}

console.log(answer);

function solution(input) {
  let answer = "YES";
  let stack = [];
  for (let x of input) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
    console.log(stack);
  }
  if (stack.length > 0) return "NO";
  return answer;
}
