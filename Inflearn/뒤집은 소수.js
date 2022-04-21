"use strict";

const fs = require("fs");
const [N, arr] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, arr);

function solution(N, arr) {
  arr = arr.split(" ");
  let result = [];
  for (let i = 0; i < N; i++) {
    let temp = arr[i].split("").reverse().join("");
    if (checkPrime(Number(temp))) result.push(Number(temp));
  }
  function checkPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return result;
}

console.log(answer);

// function solution(arr) {
//   let answer;
//   for (let x of arr) {
//     let res = 0;
//     while (x) {
//       let t = x % 10;
//       res = res * 10 + t;
//       x = parseInt(x / 10);
//     }
//     if (isPrime(res)) answer.push(res);
//   }

//   return answer;
// }

function solution(arr) {
  let answer;
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));

    if (isPrime(res)) answer.push(res);
  }
}

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(num / 2); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
