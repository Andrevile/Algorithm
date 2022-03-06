function solution(s, n) {
  var answer = "";
  let arr = s.split("");
  arr.forEach((c) =>
    c === " " ? (answer += " ") : (answer += getString(c, n))
  );
  return answer;
}

function getString(char, n) {
  if (char.match(/[A-Z]/)) {
    return String.fromCharCode(((char.charCodeAt(0) - 65 + n) % 26) + 65);
  } else {
    return String.fromCharCode(((char.charCodeAt(0) - 97 + n) % 26) + 97);
  }
}
