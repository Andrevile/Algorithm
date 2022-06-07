"use strict";

const fs = require("fs");
const [condition, ...edges] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

let answer = solution(condition, edges);

function solution(condition, edges) {
  const [N, M] = condition.split(" ").map((el) => Number(el));
  edges = edges.map((el) => el.split(" ").map((el) => Number(el)));
  const graph = Array.from(Array(N), () => Array(N).fill(0));
  const visited = Array.from({ length: N }, () => false);
  for (let edge of edges) {
    const [row, col] = edge;
    graph[row - 1][col - 1] = 1;
  }
  let count = 0;
  function DFS(vertex, track) {
    if (vertex === N - 1) {
      count++;
      return;
    }
    for (let i = 0; i < N; i++) {
      if (graph[vertex][i] && !visited[i]) {
        visited[i] = true;
        DFS(i, [...track, i + 1]);
        visited[i] = false;
      }
    }
  }
  visited[0] = true;
  DFS(0, [1]);
  return count;
}

console.log(answer);

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}
