"use strict";

const fs = require("fs");
const [N, M] = fs.readFileSync("./dev/stdin").toString().split(" ");

let answer = solution(N, M);

function solution(N, M) {
  N = Number(N);
  M = Number(M);
  const visited = Array.from({ length: N }, () => 0);
  let result = [];
  function DFS(L, index, tmp) {
    if (L === M) {
      result.push(tmp);
      return;
    } else {
      for (let i = index + 1; i <= N; i++) {
        if (visited[i - 1] === 0) {
          visited[i - 1] = 1;
          DFS(L + 1, i, [...tmp, i]);
          visited[i - 1] = 0;
        }
      }
    }
  }
  DFS(0, 0, []);
  return result;
}

answer.forEach((el) => console.log(el.join(" ")));
console.log(answer.length);

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.splice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}
