"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  arr = arr.split(" ").map((el) => Number(el));
  let prize = Array.from({ length: N }, () => 1);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue;

      if (arr[i] < arr[j]) prize[i]++;
    }
  }
  return prize;
}

console.log(answer.join(" "));

// function solution(arr) {
//   let n = arr.length;
//   let answer = Array.from({ length: n }, () => 1);
//   for (let i = 0; i < n; i++) {
//     for (j = 0; j < N; j++) {
//       if (arr[j] > arr[i]) answer[i]++;
//     }
//   }
//   return answer;
// }
