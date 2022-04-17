"use strict"

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  input = input.replace(/[^0-9]/g,"");
  
  return parseInt( input)
}

console.log(answer);

// function solution(s){
//     let answer = "";
//     for(let x of s){
//         if(!isNaN(x)) answer+=x;
//     }
//     return parseInt(answer);
// }

// function solution(str){
//     let answer = 0;
//     for(let x of str){
//         if(!isNaN(x)) answer = answer * 10 + Number(x);
//     }
//     return answer
// }