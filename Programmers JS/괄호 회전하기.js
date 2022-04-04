function solution(s) {
  var answer = 0;
  let match = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    let check = checkValid(s, match);
    if (check) answer++;

    let pop = s.shift();
    s.push(pop);
  }
  // console.log(checkValid(s,match))
  return answer;
}

function checkValid(s, match) {
  let list = ["]", ")", "}"];
  let stack = [];
  let str = s.map((a) => a);

  while (str.length) {
    let pop = str.shift();

    if (!list.includes(pop)) {
      stack.push(pop);
    } else {
      if (stack[stack.length - 1] === match[pop]) {
        stack.pop();
      } else {
        stack.push(pop);
      }
    }
  }
  return stack.length === 0 ? true : false;
}
