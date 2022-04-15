"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  let reverse = input.toLowerCase().split("").reverse().join("");
  return input.toLowerCase() === reverse ? "YES" : "NO";
}

console.log(answer);

// solution.1
// function solution(s) {
//   let answer = "YES";
//   s = s.toLowerCase();
//   console.log(s);
//   let len = s.length;
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (s[i] !== s[len - i - 1]) return "NO";
//   }

//   return answer;
// }

// solution.2
// function solution(s) {
//   let answer = "YES";
//   s = s.toLowerCase();
//   if (s.split("").reverse().join("") !== s) return "NO";
//   return answer;
// }
