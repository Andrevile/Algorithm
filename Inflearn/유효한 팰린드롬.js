"use strict"

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  input = input.toLowerCase().replace(/[^a-z]/g,"");
  return input === input.split("").reverse().join("") ? "YES" : "NO"
}

console.log(answer);

// function solution(s){
//     let answer = "YES";
//     s = s.toLowerCase().replace(/[^a-z]/g,"");
//     if(s.split("").reverse().join("") !== s) return "NO";

//     return answer;
// }