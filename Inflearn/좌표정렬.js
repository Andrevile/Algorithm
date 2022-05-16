"use strict";

const fs = require("fs");
const [N, ...arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

// function solution(N, arr) {
//   arr = arr.map((el) => el.split(" ").map((el) => Number(el)));
//   arr.sort((a, b) => {
//     if (a[0] < b[0]) return -1;
//     else if (a[0] > b[0]) return 1;
//     else {
//       if (a[1] < b[1]) return -1;
//       else return 1;
//     }
//   });
//   return arr;
// }

answer.forEach((el) => console.log(el.join(" ")));

function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
}
