"use strict";

const fs = require("fs");
const [condition, ...arr] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = solution(condition, arr);

// function solution(condition, arr) {
//   let [N, M] = condition.split(" ").map((el) => Number(el));
//   arr = arr.map((row) => row.split(" ").map((el) => Number(el)));

//   let permutation = getPermutation([1, 2, 3, 4], 2);
//   for (let [mento, mentee] of permutation) {
//       for(let test = 0; test < M; test++){
//           for(let person = 0; person < N; person++){

//           }
//       }
//       let mentoPrize =
//   }
//   console.log(permutation);
// }

// function getPermutation(arr, num) {
//   const results = [];
//   if (num === 1) return arr.map((el) => [el]);

//   arr.forEach((fixed, index, origin) => {
//     let rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

//     const permutation = getPermutation(rest, num - 1);

//     const attached = permutation.map((el) => [fixed, ...el]);

//     results.push(...attached);
//   });
//   return results;
// }

console.log(answer);

function solution(test) {
  let answer = 0;
  let m = test.length;
  let n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}
