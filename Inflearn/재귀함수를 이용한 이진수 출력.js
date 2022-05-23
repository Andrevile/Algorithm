"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(Number(input));

function solution(input) {
  let result = [];
  function recursive(n) {
    if (n === 0) return;
    recursive(parseInt(n / 2));
    result.push(n % 2);
  }

  recursive(input);
  return result;
}

console.log(answer.join(""));

function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += n % 2;
    }
  }
  DFS(n);
  return answer;
}
