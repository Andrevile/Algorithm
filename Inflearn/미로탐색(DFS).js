"use strict";

const fs = require("fs");
const [...graph] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(graph);

function solution(graph) {
  graph = graph.map((row) => row.split(" ").map((col) => Number(col)));
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let count = 0;
  function DFS(target, current) {
    if (target[0] === current[0] && target[1] === current[1]) {
      count++;
      return;
    }
    for (let dir of direction) {
      const dy = current[0] + dir[0];
      const dx = current[1] + dir[1];
      if (
        0 <= dy &&
        dy < graph.length &&
        0 <= dx &&
        dx < graph[0].length &&
        graph[dy][dx] === 0
      ) {
        graph[dy][dx] = 1;
        DFS(target, [dy, dx]);
        graph[dy][dx] = 0;
      }
    }
  }
  graph[0][0] = 1;
  DFS([graph.length - 1, graph[0].length - 1], [0, 0]);
  return count;
}

console.log(answer);

function solution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
}
