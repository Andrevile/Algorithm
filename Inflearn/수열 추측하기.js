"use strict";

const fs = require("fs");
const [N, F] = fs.readFileSync("./dev/stdin").toString().split(" ");

let answer = solution(N, F);

function solution(N, F) {
  N = Number(N);
  F = Number(F);
  let num = [];
  const cache = Array.from(Array(N), () => Array(N).fill(0));
  function C(n, r) {
    if (cache[n][r] > 0) return cache[n][r];
    if (n === r || r === 0) {
      return 1;
    } else {
      return (cache[n][r] = C(n - 1, r - 1) + C(n - 1, r));
    }
  }

  for (let i = 0; i < N; i++) {
    num.push(C(N - 1, i));
  }

  const numbers = Array.from({ length: N }, (el, i) => i + 1);
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
  let result = [];
  const permutation = getPermutation(numbers, numbers.length);
  for (let x of permutation) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += x[i] * num[i];
    }
    if (sum === F) {
      result.push(x);
    }
  }

  return result;
}

console.log(answer[0].join(" "));

function solution(n, f) {
  let answer;
  let flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= N; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}
