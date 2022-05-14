"use strict";

const fs = require("fs");
const [condition, process] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

let answer = solution(condition, process);

function solution(condition, process) {
  const [S, N] = condition.split(" ").map((el) => Number(el));
  process = process.split(" ").map((el) => Number(el));
  let cache = Array.from({ length: S }, () => 0);
  while (process.length) {
    let pop = process.shift();
    if (cache.includes(pop)) {
      cache = [pop, ...cache.filter((el) => el !== pop)];
    } else {
      cache.pop();
      cache.unshift(pop);
    }
  }
  return cache.join(" ");
}

console.log(answer);

// function solution(size, arr) {
//   let answer = [];
//   arr.forEach((x) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) {
//       if (x === answer[i]) pos = i;
//     }
//     if (pos === -1) {
//       answer.unshift(x);
//       if (answer.length > size) {
//         answer.pop();
//       }
//     } else {
//       answer.splice(pos, 1);
//       answer.unshift(x);
//     }
//     answer[0] = x;
//   });
//   return answer;
// }
