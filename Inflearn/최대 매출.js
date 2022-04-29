"use strict";

const fs = require("fs");
const [condition, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(condition, arr);

// function solution(condition, arr) {
//   let [N, K] = condition.split(" ").map((el) => Number(el));
//   arr = arr.split(" ").map((el) => Number(el));
//   let sumArr = [0];
//   let max = 0;
//   for (let i = 0; i < N; i++) sumArr.push(sumArr[sumArr.length - 1] + arr[i]);
//   for (let i = K; i < N + 1; i++) {
//     let income = sumArr[i] - sumArr[i - K];
//     if (income > max) max = income;
//   }
//   return max;
// }

console.log(answer);

function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}
