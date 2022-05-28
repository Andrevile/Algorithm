"use strict";

const fs = require("fs");
const [condition, ...arr] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

let answer = solution(condition, arr);

function solution(condition, arr) {
  const [N, M] = condition.split(" ").map((el) => Number(el));
  arr = arr.map((el) => el.split(" ").map((el) => Number(el)));
  let visited = Array.from({ length: N }, () => false);
  let max = Number.MIN_SAFE_INTEGER;
  function DFS() {
    let sum = 0;
    let time = 0;
    for (let i = 0; i < N; i++) {
      if (visited[i]) {
        sum += arr[i][0];
        time += arr[i][1];
      }
    }
    if (max < sum) max = sum;
    for (let i = 0; i < N; i++) {
      if (!visited[i] && time + arr[i][1] <= M) {
        visited[i] = true;
        DFS();
        visited[i] = false;
      }
    }
  }
  DFS();
  return max;
}

console.log(answer);

function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }
}
