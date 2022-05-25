"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(Number(input));

function solution(input) {
  function DFS(n, current) {
    if (n > input) return;

    for (let i = n + 1; i <= input; i++) {
      DFS(i, current + " " + i);
    }
    console.log(current);
  }

  for (let i = 1; i <= input; i++) {
    DFS(i, i.toString());
  }
}

function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}
