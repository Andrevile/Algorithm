"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    let check = input[i].charCodeAt();
    if (65 <= check && check < 91) {
      result += input[i].toLowerCase();
    } else {
      result += input[i].toUpperCase();
    }
  }
  return result;
}

console.log(answer);

// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x === x.toUpperCase()) answer += x.toLowerCase();
//     else answer += x.toUpperCase();
//   }
//   return answer;
// }
