"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  let answer = [];
  arr = arr.split(" ").map((el) => Number(el));
  answer = arr.filter((cur, idx) => {
    if (idx === 0 || arr[idx - 1] < cur) return true;
    return false;
  });

  return answer.join(" ");
}

console.log(answer);

// function solution(arr) {
//   let answer = [];
//   answer.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) answer.push(arr[i]);
//   }
//   return answer;
// }
