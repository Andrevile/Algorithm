"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let answer = solution(input);

function solution(input) {
  let string = input[0].split("");
  let target = input[1];
  return string.filter((char) => char === target).length;
}

console.log(answer);

// function solution(s, t) {
//   let answer = 0;
//   for (let x of s) {
//     if (x === t) answer++;
//   }

//   return answer;
// }

function solution(s, t) {
  let answre = s.split(t);
  return answer - 1;
}
