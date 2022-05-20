"use strict";

const fs = require("fs");
const [condition, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(condition, arr);

// function solution(condition, arr) {
//   const [N, M] = condition.split(" ").map((el) => Number(el));
//   arr = arr.split(" ").map((el) => Number(el));
//   let start = Math.max(...arr);
//   let end = arr.reduce((acc, cur) => acc + cur);

//   let result;
//   while (start <= end) {
//     // console.log(start, end);
//     let mid = parseInt((start + end) / 2);
//     let DVD = 0;
//     let sum = 0;
//     for (let i = 0; i < N; i++) {
//       if (sum + arr[i] > mid) {
//         DVD++;
//         sum = 0;
//       }
//       sum += arr[i];
//     }
//     if (DVD + 1 <= M) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return start;
// }

// console.log(answer);

function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}
