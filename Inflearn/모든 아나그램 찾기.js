"use strict";

const fs = require("fs");
const [S, T] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(S, T);

// function solution(S, T) {
//   let count = 0;
//   for (let i = 0; i < S.length - T.length + 1; i++) {
//     let flag = true;
//     let dict = new Map();

//     for (let i = 0; i < T.length; i++) {
//       if (dict.has(T[i])) dict.set(T[i], dict.get(T[i]) + 1);
//       else dict.set(T[i], 1);
//     }
//     let temp = S.substr(i, T.length);
//     for (let j = 0; j < temp.length; j++) {
//       if (!dict.has(temp[j]) || dict.get(temp[j]) === 0) flag = false;
//       dict.set(temp[j], dict.get(temp[j]) - 1);
//     }
//     if (flag) count++;
//   }
//   return count;
// }

console.log(answer);

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
// function solution(s, t) {
//   let answer = 0;
//   let sH = new Map();
//   for (let x of t) {
//     sH.set(x, (sH.get(x) || 0) - 1);
//   }
//   let len = t.length - 1;
//   for (let i = 0; i < len; i++) {
//     sH.set(s[i], (sH.get(s[i]) || 0) + 1);
//     if (sH.get(s[i]) === 0) sH.delete(s[i]);
//   }
//   let lt = 0;
//   for (let rt = len; rt < s.length; rt++) {
//     sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
//     if (sH.get(s[rt]) === 0) sH.delete(s[rt]);
//     if (sH.size === 0) answer++;
//     sH.set(s[lt], (sH.get(s[lt]) || 0) - 1);
//     if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
//     lt++;
//   }
//   return answer;
// }
