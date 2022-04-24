"use strict";

const fs = require("fs");
const [condition, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(condition.split(" "), arr);

function solution([N, K], arr) {
  arr = arr.split(" ").map((el) => Number(el));

  function getCombination(arr, num) {
    const results = [];
    if (num === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      let rest = origin.slice(index + 1);

      let combinations = getCombination(rest, num - 1);

      let attached = combinations.map((el) => [fixed, ...el]);

      results.push(...attached);
    });

    return results;
  }
  let combinations = getCombination(arr, 3)
    .map((el) => el.reduce((acc, cur) => acc + cur, 0))
    .sort((a, b) => b - a);
  let count = 0;
  let current = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < combinations.length; i++) {
    if (current > combinations[i]) {
      count++;
      current = combinations[i];
    }
    if (count === Number(K)) break;
  }
  return current;
}

console.log(answer);

// function solution(n, k, card) {
//   let answer;
//   let tmp = new Set();
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         tmp.add(card[i] + card[j] + card[k]);
//       }
//     }
//   }
//   let a = Array.from(tmp).sort((a, b) => b - a);
//   answer = a[k - 1];
//   return answer;
// }
