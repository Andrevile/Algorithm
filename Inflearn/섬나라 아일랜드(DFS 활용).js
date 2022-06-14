"use strict";

const fs = require("fs");
const [N, ...graph] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, graph);

function solution(N, graph) {
  N = Number(N);
  graph = graph.map((row) => row.split(" ").map((el) => Number(el)));
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  let count = 0;
  function DFS(current) {
    graph[current[0]][current[1]] = 0;
    for (let dir of direction) {
      let dy = current[0] + dir[0];
      let dx = current[1] + dir[1];
      if (0 <= dy && dy < N && 0 <= dx && dx < N && graph[dy][dx] === 1) {
        DFS([dy, dx]);
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j]) {
        count++;
        DFS([i, j]);
      }
    }
  }
  return count;
}

console.log(answer);

function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }

  return DFS(i, j);
}
