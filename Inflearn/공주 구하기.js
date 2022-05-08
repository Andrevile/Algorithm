"use strict";

const fs = require("fs");
const [N, K] = fs.readFileSync("./dev/stdin").toString().split(" ");

let answer = solution(N, K);

function solution(N, K) {
  let queue = Array.from({ length: N }, (el, i) => i + 1);
  let count = 0;
  while (queue.length !== 1) {
    count++;
    let pop = queue.shift();
    if (count % K !== 0) queue.push(pop);
  }
  return queue.pop();
}

console.log(answer);

// function solution(n, k) {
//   let answer;
//   let queue = Array.from({ length: n }, (v, i) => i + 1);
//   while (queue.length) {
//     for (let i = 1; i < K; i++) queue.push(queue.shift());
//     queue.shift();
//     if (queue.length === 1) answer = queue.shift();
//   }
//   return answer;
// }
