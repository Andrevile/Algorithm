"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  arr = arr.split(" ").map((el) => Number(el));
  const sorted = [...arr].sort((a, b) => a - b);
  let result = [];
  arr.forEach((el, i) => {
    if (el !== sorted[i]) {
      result.push(i + 1);
    }
  });
  return result.join(" ");
}

console.log(answer);

// function solution(arr) {
//   let answer = [];
//   let sortArr = arr.slice();
//   sortArr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== sortArr[i]) answer.push(i + 1);
//   }
//   return answer;
// }
