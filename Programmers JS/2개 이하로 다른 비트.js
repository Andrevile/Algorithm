function solution(numbers) {
  var answer = [];

  for (let x of numbers) {
    let xBinary = convertBinary(x).split("");
    let count = 0;
    let index = xBinary.length - 1;
    while (index >= 0) {
      if (xBinary[index] === "1") count++;
      else {
        break;
      }
      index--;
    }

    if (count === 0 || count === 1) {
      answer.push(x + 1);
    } else {
      answer.push(x + 2 ** (count - 1));
    }
  }
  return answer;
}

function convertBinary(num) {
  let binary = "";
  while (num > 0) {
    let mod = num % 2;
    num = parseInt(num / 2);
    binary = mod + binary;
  }
  return binary;
}
