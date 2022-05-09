"use strict";

const fs = require("fs");
const [order, lecture] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(order, lecture);

function solution(order, lecture) {
  order = order.split("");
  lecture = lecture.split("");
  while (lecture.length) {
    let pop = lecture.shift();
    if (order[0] === pop) {
      order.shift();
    }
  }
  return order.length === 0 ? "YES" : "NO";
}

console.log(answer);

// function solution(need, plan) {
//   let answer = "YES";
//   let queue = need.split("");
//   for (let x of plan) {
//     if (queue.includes(x)) {
//       if (x !== queue.shift()) return "NO";
//     }
//   }
//   if (queue.length > 0) return "NO";
//   return answer;
// }
