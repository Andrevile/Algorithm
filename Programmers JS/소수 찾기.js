var set = new Set();
function solution(numbers) {
  let size = 0;
  numbers = numbers.split("");
  makeNumber("", numbers);
  return set.size;
}
function makeNumber(str1, str2) {
  if (str1 !== "") {
    if (isPrime(Number(str1)) && set.has(Number(str1)) === false) {
      set.add(Number(str1));
    }
  }
  if (str2.length > 0) {
    for (let i = 0; i < str2.length; i++) {
      let temp = str2.slice(0);
      temp.splice(i, 1);
      makeNumber(str1 + str2[i], temp);
    }
  }
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < parseInt(num / 2) + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}
