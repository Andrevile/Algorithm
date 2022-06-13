"use strict";

const fs = require("fs");
const [S, E] = fs.readFileSync("./dev/stdin").toString().split(" ");

let answer = solution(Number(S), Number(E));

function solution(S, E) {
  const position = Array.from({ length: 10001 }, () => 0);
  const jump = [-1, 1, 5];
  function BFS() {
    let queue = [S];
    while (queue.length) {
      let pop = queue.shift();

      if (pop === E) break;
      for (let move of jump) {
        if (pop + move > 0 && position[pop + move] === 0) {
          queue.push(pop + move);
          position[pop + move] = position[pop] + 1;
        }
      }
    }
  }
  BFS();
  return position[E];
}

console.log(answer);

function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  ch[s] = 1;
  queue.push(s);
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
}
