function solution(s) {
  let arr = s.split("");
  let stack = [];
  while (arr.length !== 0) {
    let pop = arr.pop();
    if (stack.length !== 0 && stack[stack.length - 1] === pop) {
      stack.pop();
    } else {
      stack.push(pop);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
