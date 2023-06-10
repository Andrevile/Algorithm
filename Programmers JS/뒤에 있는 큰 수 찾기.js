function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack[stack.length - 1]] < numbers[i]) {
      const pop_index = stack.pop();
      answer[pop_index] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}
