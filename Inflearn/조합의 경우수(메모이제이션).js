"use strict";

const fs = require("fs");
const [n, r] = fs.readFileSync("./dev/stdin").toString().split(" ");

let answer = solution(n, r);

// function solution(n, r) {
//   const arr = Array.from({ length: n }, (el, i) => i);

//   function getCombination(arr, num) {
//     const results = [];
//     if (num === 1) return arr.map((el) => [el]);

//     arr.forEach((fixed, index, origin) => {
//       const rest = origin.slice(index + 1);

//       const comb = getCombination(rest, num - 1);

//       const attached = comb.map((el) => [fixed, ...el]);

//       results.push(...attached);
//     });

//     return results;
//   }
//   const result = getCombination(arr, r);
//   return result.length;
// }

console.log(answer);

function solution(n, r) {
  let answer;
  let dy = Array.from(Array(r), () => Array(n).fill(0));
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}
