"use strict";

const fs = require("fs");
const [N, ...arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  let wordSet = new Set();
  arr.forEach((word) => wordSet.add(word));
  return [...wordSet];
}

answer.forEach((word) => console.log(word));

// function solution(s) {
//   let answer;
//   answer = s.filter((v, i) => {
//     if (s.indexOf(v) === i) return true;
//   });

//   return answer;
// }
