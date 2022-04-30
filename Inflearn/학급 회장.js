"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

// function solution(N, arr) {
//   N = Number(N);
//   arr = arr.split("");
//   let dict = { A: 0, B: 0, C: 0, D: 0, E: 0 };
//   for (let i = 0; i < N; i++) {
//     dict[arr[i]]++;
//   }

//   let max = Math.max(...Object.values(dict));
//   let result = Object.keys(dict).find((key) => dict[key] === max);
//   return result;
// }

console.log(answer);

function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}
