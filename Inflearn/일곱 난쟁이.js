"use strict";

const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));

let answer = solution(input);

// function solution(input) {
//   let combination = getCombinations(input, 7);
//   let results = combination.filter((comb) => {
//     let sum = comb.reduce((acc, cur) => (acc += cur), 0);
//     if (sum === 100) {
//       return true;
//     }
//   });

//   return [...results];
// }

// answer.forEach((list) => {
//   console.log(list.join(" "));
// });

function getCombinations(arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combination = getCombinations(rest, selectNum - 1);

    const attached = combination.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
}

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  let flag = 0;
  for (let i = 0; i < 8; i++) {
    // if (flag === 0) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        //   flag = 1;
      }
    }
    // }
  }
  return answer;
}

console.log(answer.join(" "));
