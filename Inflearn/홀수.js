"use strict";

const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));

let answer = solution(input);

function solution(input) {
  let oddArr = input.filter((num) => num % 2 !== 0);
  let oddSum = oddArr.reduce((acc, cur) => (acc += cur));
  let oddMin = Math.min(...oddArr);
  return [oddSum, oddMin];
}

answer.forEach((result) => console.log(result));

// function solution(arr) {
//   let answer = [];
//   let sum = 0,
//     min = Number.MAX_SAFE_INTEGER;
//   for (let x of arr) {
//     if (x % 2 === 1) {
//       sum += x;
//       if (x < min) min = x;
//     }
//   }
//   answer.push(sum);
//   answer.push(min);

//   return answer;
// }
