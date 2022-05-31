"use strict";

const fs = require("fs");
const [condition, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(condition, arr);

function solution(condition, arr) {
  const [N, M] = condition.split(" ").map((el) => Number(el));
  arr = arr.split(" ").map((el) => Number(el));

  function getPermutation(arr, num) {
    const results = [];
    if (num === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

      const permutaion = getPermutation(rest, num - 1);

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

// function solution(m, arr) {
//   let answer = [];
//   n = arr.length;
//   let ch = Array.from({ length: n }, () => 0);
//   let tmp = Array.from({ length: m }, () => 0);

//   function DFS(L) {
//     if (L === m) {
//       answer.push(tmp, slice());
//     } else {
//       for (let i = 0; i < n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           tmp[L] = arr[i];
//           DFS(L + 1);
//           ch[i] = 0;
//         }
//       }
//     }
//   }

//   DFS(0);
//   return answer;
// }
