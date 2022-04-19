"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();

let answer = solution(input);

function solution(input) {
  let result = input[0];
  let count = 1;
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] === input[i]) {
      count++;
    } else {
      if (count !== 1) result += count;
      result += input[i];
      count = 1;
    }
  }
  result += count;
  return result;
}

console.log(answer);

// function solution(s) {
//   let answer = "";
//   let cnt = 1;
//   s = s + " ";
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === s[i + 1]) cnt++;
//     else {
//       answer += s[i];
//       if (cnt > 1) answer += String(cnt);
//       cnt += 1;
//     }
//   }
// }
