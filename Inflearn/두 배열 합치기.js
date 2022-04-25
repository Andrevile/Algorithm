"use strict";

const fs = require("fs");
const [N, nArr, M, mArr] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

let answer = solution(N, nArr, M, mArr);

// function solution(N, nArr, M, mArr) {
//   N = Number(N);
//   nArr = nArr.split(" ").map((el) => Number(el));
//   M = Number(M);
//   mArr = mArr.split(" ").map((el) => Number(el));

//   let result = [...nArr, ...mArr];
//   return result.sort((a, b) => a - b);
// }

console.log(answer.join(" "));

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}
