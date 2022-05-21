"use strict";

const fs = require("fs");
const [condition, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(condition, arr);

// function getDistance(arr, dist, horse) {
//   let tmp = arr[0];
//   let count = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - tmp >= dist) {
//       tmp = arr[i];
//       count++;
//     }
//   }
//   return count >= horse ? true : false;
// }

// function solution(condition, arr) {
//   let [N, C] = condition.split(" ").map((el) => Number(el));
//   arr = arr.split(" ").map((el) => Number(el));
//   const sortArr = [...arr].sort((a, b) => a - b);
//   let result = 0;
//   let start = Number.MAX_SAFE_INTEGER;
//   let finish = sortArr[sortArr.length - 1] - sortArr[0];
//   let tmp = sortArr[0];
//   for (let i = 1; i < sortArr.length; i++) {
//     if (sortArr[i] - tmp < start) {
//       start = sortArr[i] - tmp;
//       tmp = sortArr[i];
//     }
//   }

//   while (start <= finish) {
//     let mid = parseInt((start + finish) / 2);

//     if (getDistance(sortArr, mid, C)) {
//       start = mid + 1;
//       result = mid;
//     } else {
//       finish = mid - 1;
//     }
//   }
//   return result;
// }

console.log(answer);

function count(stable, dist) {
  let cnt = 1;
  let ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}
