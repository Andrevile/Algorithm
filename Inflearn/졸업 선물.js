"use strict";

const fs = require("fs");
const [condition, ...arr] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

let answer = solution(condition, arr);

function solution(condition, arr) {
  let [studentsNum, budget] = condition.split(" ").map((el) => Number(el));
  arr = arr.map((el) => el.split(" ").map((el) => Number(el)));
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr.map((el) => el.map((el) => el));
    tempArr[i][0] = parseInt(tempArr[i][0] / 2);
    tempArr = tempArr.map((el) => el[0] + el[1]).sort((a, b) => a - b);
    let count = 0;
    let index = 0;
    while (index < studentsNum) {
      if (budget - tempArr[index] >= 0) {
        budget -= tempArr[index];
        count++;
      } else {
        break;
      }

      index++;
    }
    if (count > max) max = count;
  }
  return max;
}

console.log(answer);

// function solution(m, product) {
//   let answer = 0;
//   let n = product.length;
//   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//   for (let i = 0; i < n; i++) {
//     let money = m - product[i][0] / 2 + product[i][1];
//     let cnt = 1;
//     for (let j = 0; j < n; j++) {
//       if (j !== i && product[j][0] + product[j][1] > money) break;
//       if (j !== i && product[j][0] + product[j][1] <= money) {
//         money -= product[j][0] + product[j][1];
//         cnt++;
//       }
//     }
//     answer = Math.max(answer, cnt);
//   }
//   return answer;
// }
