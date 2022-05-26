"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  N = Number(N);
  arr = arr.split(" ").map((el) => Number(el));
  const totalSum = arr.reduce((acc, cur) => acc + cur);
  if (totalSum % 2 !== 0) return "NO";
  const purpose = totalSum / 2;
  let visited = Array.from({ length: N }, () => false);
  let result = "NO";

  function DFS() {
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (visited[i]) sum += arr[i];
    }
    if (sum === purpose) {
      result = "YES";
      return;
    }
    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        DFS();
        visited[i] = false;
      }
    }
  }
  DFS();
  return result;
}

console.log(answer);

function solution(arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}
