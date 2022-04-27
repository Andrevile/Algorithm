"use strict";

const fs = require("fs");
const [condition, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(condition, arr);

// function solution(condition, arr) {
//   let [N, M] = condition.split(" ").map((el) => Number(el));
//   arr = arr.split(" ").map((el) => Number(el));
//   let count = 0;
//   let left = 0;
//   let right = 0;
//   let sum = 0;
//   while(left < N && right < N){
//     if (sum < M) {
//       sum += arr[right];
//       right++;
//     } else if (sum > M) {
//       sum -= arr[left];
//       left++;
//     } else {
//       count++;
//       left++;
//       right++;
//     }
//   }
//   return count;
// }

console.log(answer);

function solution(n, m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}
