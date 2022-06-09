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
  const visited = Array.from({ length: N }, () => false);
  const graph = {};
  for (let i = 1; i <= N; i++) {
    graph[i] = new Set();
  }
  for (let [from, to] of edges) {
    graph[from].add(to);
  }
  let count = 0;

  function DFS(vertex, track) {
    if (vertex === N) {
      count++;
      return;
    }
    for (let next of graph[vertex]) {
      if (!visited[next - 1]) {
        visited[next - 1] = true;
        DFS(next, [...track, next]);
        visited[next - 1] = false;
      }
    }
  }
  visited[0] = true;
  DFS(1, [1]);
  return count;
}

console.log(answer);

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}
