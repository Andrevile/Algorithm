"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

let answer = solution(input);

function solution(input) {
  let stack = [];
  for (let x of input) {
    if (/[0-9]/.test(x)) {
      stack.push(x);
    } else {
      let post = Number(stack.pop());
      let prev = Number(stack.pop());
      let result = operand(x, prev, post);
      stack.push(result);
    }
  }
  return stack.pop();
}

function operand(c, prev, post) {
  switch (c) {
    case "+":
      return prev + post;
    case "-":
      return prev - post;
    case "*":
      return prev * post;
    case "/":
      return prev / post;
  }
}

console.log(answer);

// function solution(s) {
//   let answer;
//   stack = [];
//   for (let x of s) {
//     if (!isNaN(x)) stack.push(Number(x));
//     else {
//       let rt = stack.pop();
//       let lt = stack.pop();
//       if (x === "+") stack.push(lt + rt);
//       else if (x === "-") stack.push(lt - rt);
//       else if (x === "*") stack.push(lt * rt);
//       else if (x === "/") stack.push(lt / rt);
//     }
//   }
//   answer = stack[0];
//   return answer;
// }
