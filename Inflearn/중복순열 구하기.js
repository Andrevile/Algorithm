"use strict";

const fs = require("fs");
const [N, M] = fs.readFileSync("./dev/stdin").toString().split(" ");

let answer = solution(N, M);

function solution(N, M) {
  let arr = Array.from({ length: N }, (e, i) => i + 1);
  function getPermutation(arr, M) {
    const results = [];
    if (M === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin];

      let permutaion = getPermutation(rest, M - 1);

      const attached = permutaion.map((el) => [fixed, ...el]);

      results.push(...attached);
    });

    return results;
  }
  const result = getPermutation(arr, M);
  return result;
}

answer.forEach((el) => console.log(el.join(" ")));
console.log(answer.length);

// function solution(n, m) {
//   let answer = [];
//   let tmp = Array.from({ length: m }, () => 0);
//   function DFS(L) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = 1; i <= n; i++) {
//         tmp[L] = i;
//         DFS(L + 1);
//       }
//     }
//   }
//   DFS(0);
//   return answer;
// }
