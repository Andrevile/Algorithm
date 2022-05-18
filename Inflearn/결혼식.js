"use strict";

const fs = require("fs");
const [N, ...arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  arr = arr.map((el) => el.split(" ").map((el) => Number(el)));
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of arr) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(answer);
