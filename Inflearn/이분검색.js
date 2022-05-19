"use strict";

const fs = require("fs");
const [condition, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(condition, arr);

function solution(condition, arr) {
  let [N, target] = condition.split(" ").map((el) => Number(el));
  arr = arr.split(" ").map((el) => Number(el));
  arr.sort((a, b) => a - b);
  let result = 0;
  let start = 0;
  let end = N - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (target === arr[mid]) {
      result = mid;
      break;
    }
    if (target > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }

  return result + 1;
}

console.log(answer);

// function solution(target, arr) {
//   let answer;
//   arr.sort((a, b) => a - b);
//   let lt = 0;
//   let rt = arr.length - 1;
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (arr[mid] === target) {
//       answer = mid + 1;
//       break;
//     } else if (arr[mid] > target) rt = mid - 1;
//     else lt = mid + 1;
//   }
//   return answer;
// }
