"use strict";

const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));

let answer = solution(input);

function solution(input) {
  return Math.min(...input);
}

console.log(answer);

// function solution(a,b,c){
//     let answer;
//     if(a < b) answer = a;
//     else answer = b;
//     if(c <  answer) answer = c;

//     return answer;
// }
