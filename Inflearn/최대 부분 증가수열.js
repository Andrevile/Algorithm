"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  N = Number(N);
  arr = arr.split(" ").map((el) => Number(el));
  const dp = Array.from({ length: N }, () => 1);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  return Math.max(...dp);
}

function solution2(N, arr) {
  N = Number(N);
  arr = arr.split(" ").map((el) => Number(el));
  const result = [arr[0]];
  const record = [1];
  function lowerBound(start, end, target) {
    while (start < end) {
      let mid = parseInt((start + end) / 2, 10);

      if (target <= result[mid]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  }
  for (let i = 1; i < N; i++) {
    if (arr[i] > result[result.length - 1]) {
      result.push(arr[i]);
      record.push(result.length);
    } else {
      let index = lowerBound(0, result.length, arr[i]);
      result[index] = arr[i];
      record.push(index + 1);
    }
  }
  const LIS = [];
  let current = result.length;
  for (let i = N; i >= 0; i--) {
    if (record[i] === current) {
      LIS.push(arr[i]);
      current--;
    }
  }
  console.log(LIS.reverse().join(" "));
  return result.length;
}
console.log(answer);

solution2(N, arr);

// function solution(arr) {
//   let answer = 0;
//   let dy = Array.from({ length: arr.length }, () => 0);
//   dy[0] = 1;
//   for (let i = 1; i < arr.length; i++) {
//     let max = 0;
//     for (let j = 1 - 1; j >= 0; j--) {
//       if (arr[j] < arr[i] && dy[j] > max) {
//         max = dy[j];
//       }
//     }
//     dy[i] = max + 1;
//     answer = Math.max(answer, dy[i]);
//   }
//   return answer;
// }
