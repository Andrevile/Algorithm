"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(input);

function solution(input) {
  let day = Number(input[0]);
  let cars = input[1].split(" ").map((el) => Number(el));
  let count = 0;
  cars.forEach((car) => car % 10 === day && count++);
  return count;
}

console.log(answer);

// function solution(day, arr) {
//   let answer = 0;
//   for (let x of arr) {
//     if (x % 10 === day) answer++;
//   }
//   return answer;
// }
