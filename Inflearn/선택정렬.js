"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

// function solution(N, arr) {
//   arr = arr.split(" ").map((el) => Number(el));
//   let least;
//   for (let i = 0; i < N - 1; i++) {
//     least = i;
//     for (let j = i + 1; j < N; j++) {
//       if (arr[j] < arr[least]) {
//         least = j;
//       }
//     }
//     if (i !== least) {
//       let temp = arr[i];
//       arr[i] = arr[least];
//       arr[least] = temp;
//     }
//   }
//   return arr.join(" ");
// }

console.log(answer);

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}
