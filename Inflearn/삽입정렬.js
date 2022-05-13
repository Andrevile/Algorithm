"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

// function solution(N, arr) {
//   arr = arr.split(" ").map((el) => Number(el));

//   for (let i = 1; i < N; i++) {
//     let current = arr[i];
//     let final = i;
//     for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
//       arr[j + 1] = arr[j];
//       final = j;
//     }
//     arr[final] = current;
//   }

//   return arr.join(" ");
// }

console.log(answer);

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }

  return answer;
}
