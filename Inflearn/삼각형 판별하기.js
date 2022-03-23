"use strict";

const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));

let answer = solution(input);

function solution(input) {
  let longest = Math.max(...input);
  let others = input.reduce((acc, cur, index) => {
    if (cur !== longest) {
      acc += cur;
    }
    return acc;
  }, 0);
  return others > longest ? "YES" : "NO";
}

console.log(answer);

// function solution(a, b, c) {
//   let answer = "YES",
//     max;
//   let sum = a + b + c;
//   if (a > b) max = a;
//   else max = b;
//   if (c > max) max = c;
//   if (sum - max <= max) answer = "NO";

//   return answer;
// }
