"use strict";

const fs = require("fs");
const [first, second, third] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

let answer = solution(first, second, third);

function solution(first, second, third) {
  const [N, K] = first.split(" ").map((el) => Number(el));
  const arr = second.split(" ").map((el) => Number(el));
  const M = Number(third);
  function getCombination(arr, num) {
    const result = [];
    if (num === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);

      const comb = getCombination(rest, num - 1);

      const attached = comb.map((el) => [fixed, ...el]);

      result.push(...attached);
    });

    return result;
  }

  let list = getCombination(arr, K);
  let count = 0;
  list.forEach((comb) => {
    let sum = comb.reduce((acc, cur) => acc + cur);
    if (sum % M === 0) count++;
  });
  return count;
}

console.log(answer);

function solution(n, k, arr, m) {
  let answer = 0;
  let tmp = Array.from({ length: k });
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) answer++;
      console.log(sum, tmp);
    } else {
      for (let i = s; i < n; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}
