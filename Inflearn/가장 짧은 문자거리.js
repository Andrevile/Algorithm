"use strict";

const fs = require("fs");
const [string, char] = fs.readFileSync("./dev/stdin").toString().split(" ");

let answer = solution(string, char);

function solution(string, char) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let left = i;
    let right = i;
    while (true) {
      if (string[left] === char) {
        result.push(Math.abs(i - left));
        break;
      } else if (string[right] === char) {
        result.push(Math.abs(i - right));
        break;
      }
      if (left > 0) {
        left--;
      }
      if (right < string.length - 1) {
        right++;
      }
    }
  }
  return result.join(" ");
}
console.log(answer);

// function solution(s, t) {
//   let answer = [];
//   let p = 1000;
//   for (let x of s) {
//     if (x === t) {
//       p = 0;
//       answer.push(p);
//     } else {
//       p++;
//       answer.push(p);
//     }
//   }
//   p = 1000;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === t) {
//       p = 0;
//       answer[i] = p;
//     } else {
//       p++;
//       answer[i] = Math.min(answer[i], p);
//     }
//   }
// }
