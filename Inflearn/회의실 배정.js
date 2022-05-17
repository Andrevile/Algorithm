"use strict";

const fs = require("fs");
const [N, ...arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  arr = arr.map((el) => el.split(" ").map((el) => Number(el)));
  let schedule = [...arr];
  schedule.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let count = 0;
  let lastTime = 0;
  for (let meeting of schedule) {
    let [start, finish] = meeting;
    if (lastTime <= start) {
      count++;
      lastTime = finish;
    }
  }
  return count;
}

console.log(answer);

// function solution() {
//   let answer = 0;
//   meeting.sort((a, b) => {
//     if (a[1] === b[1]) return a[0] - b[0];
//     else return a[1] - b[1];
//   });

//   let et = 0;
//   for (let x of meeting) {
//     if (x[0] >= et) {
//       answer++;
//       et = x[1];
//     }
//   }
//   return answer;
// }
