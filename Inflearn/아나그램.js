"use strict";

const fs = require("fs");
const [first, second] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(first, second);

// function solution(first, second) {
//   let first_dict = {};
//   let second_dict = {};
//   for (let x of first) {
//     if (x in first_dict) first_dict[x]++;
//     else first_dict[x] = 1;
//   }
//   for (let x of second) {
//     if (x in second_dict) second_dict[x]++;
//     else second_dict[x] = 1;
//   }
//   for (let x in first_dict) {
//     if (first_dict[x] !== second_dict[x]) return "NO";
//   }
//   return "YES";
// }

console.log(answer);

function solution(str1, str2) {
  let answer = " YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}
