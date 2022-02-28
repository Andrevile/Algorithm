function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let temp = "";
    let first = decode(n, arr1[i]);
    let second = decode(n, arr2[i]);
    for (let j = 0; j < n; j++) {
      if (first[j] === "0" && second[j] === "0") {
        temp += " ";
      } else {
        temp += "#";
      }
    }
    answer.push(temp);
  }
  return answer;
}

function decode(n, num) {
  let digit = num.toString(2);
  while (digit.length < n) {
    digit = "0" + digit;
  }
  return digit;
}
