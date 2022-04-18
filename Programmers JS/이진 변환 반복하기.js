function solution(s) {
  var answer = [];
  let convertCount = 0;
  let removeCount = 0;
  while (s !== "1") {
    convertCount++;
    let [zeroCount, newString] = convert(s);
    s = newString;
    removeCount += zeroCount;
  }
  answer = [convertCount, removeCount];
  return answer;
}

function convert(s) {
  let convertString = s;
  let zeroCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") zeroCount++;
  }
  convertString = convertString.replace(/0/g, "");
  convertString = Binary(convertString);
  return [zeroCount, convertString];
}

function Binary(s) {
  let num = s.length;
  let newString = [];
  while (num) {
    let mod = num % 2;
    newString.push(String(mod));
    num = parseInt(num / 2);
  }
  return newString.reverse().join("");
}
