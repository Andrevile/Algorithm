"use strict";

const fs = require("fs");
const [N, ...arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  let lengthArr = arr.sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    } else {
      return 1;
    }
  });
  return lengthArr[0];
}

console.log(answer);

// function solution(s) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of s) {
//     if (x.length > max) {
//       max = x.length;
//       answer = x;
//     }
//   }
//   return answer;
