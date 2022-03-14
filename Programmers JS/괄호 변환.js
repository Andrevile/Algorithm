function solution(p) {
  var answer = "";
  answer = process(p);
  return answer;
}
function process(string) {
  let split = divide(string);
  let u = split[0];
  let v = split[1];

  if (right(u)) {
    v = v === "" ? "" : process(v);
    return u + v;
  } else {
    let temp = "(";
    temp += v === "" ? "" : process(v);
    temp += ")";
    u = u.substring(1, u.length - 1);
    u = u
      .split("")
      .map((c) => (c === "(" ? ")" : "("))
      .join("");
    temp += u;
    return temp;
  }
}

function divide(string) {
  let left_count = 0;
  let right_count = 0;
  let index = 0;

  while (index < string.length) {
    if (string[index] === "(") {
      left_count++;
    } else {
      right_count++;
    }
    index++;
    if (left_count === right_count) {
      break;
    }
  }
  const u = string.substring(0, index);
  const v = string.substring(index);
  return [u, v];
}

function right(string) {
  if (string[0] === ")") {
    return false;
  }
  let stack = [];
  let arr = string.split("");
  while (arr.length > 0) {
    let pop = arr.shift();
    if (stack.length === 0) {
      stack.push(pop);
    } else if (stack[stack.length - 1] === pop) {
      stack.push(pop);
    } else if (stack[stack.length - 1] !== pop) {
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}
