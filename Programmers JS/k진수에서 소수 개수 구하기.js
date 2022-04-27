function solution(n, k) {
  var answer = [];
  let convert = n.toString(k);
  let splitArr = convert.split(/0/g);
  for (let num of splitArr) {
    let result = checkCondition(num, convert);
    result = result && checkPrime(Number(num), k);
    if (result) answer.push(num);
  }
  return answer.length;
}

function checkCondition(num, convert) {
  let result = false;
  let first_regex = new RegExp(`0${num}0`, "g");
  let second_regex = new RegExp(`0${num}\$`, "g");
  let third_regex = new RegExp(`^${num}0`, "g");
  let final_regex = num === convert;
  result = result || first_regex.test(convert);
  result = result || second_regex.test(convert);
  result = result || third_regex.test(convert);
  result = result || final_regex;
  return result;
}

function checkPrime(convertedNum, k) {
  if (convertedNum < 2) return false;
  for (let i = 2; i < parseInt(Math.sqrt(convertedNum)) + 1; i++) {
    if (convertedNum % i === 0) return false;
  }
  return true;
}
