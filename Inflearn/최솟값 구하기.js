"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ");

let answer = solution(input);

function solution(input) {
  return Math.min(...input);
}

console.log(answer);

// function solution(arr) {
//   let ansewr,
//     min = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   ansewr = min;
//   return ansewr;
// }
