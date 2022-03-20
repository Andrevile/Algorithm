function solution(expression) {
  let priority = getPermutation(["*", "-", "+"], 3);

  let result = [];
  priority.forEach((item) => {
    let number = expression.split(/[^0-9]/g);
    let operator = expression.split(/[0-9]/g).filter((el) => el !== "");
    let numbers = [...number];

    item.forEach((oper) => {
      while (operator.includes(oper)) {
        const index = operator.indexOf(oper);
        operator.splice(index, 1);
        numbers.splice(index, 2, cal(numbers[index], numbers[index + 1], oper));
      }
    });
    result.push(Math.abs(numbers[0]));
  });

  var answer = Math.max(...result);
  return answer;
}

function getPermutation(arr, num) {
  const result = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    const permutation = getPermutation(rest, num - 1);

    const attached = permutation.map((el) => [fixed, ...el]);

    result.push(...attached);
  });

  return result;
}

function cal(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "+":
      return num1 + num2;
  }
}
