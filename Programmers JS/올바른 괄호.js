function solution(s) {
  var answer = true;
  let match = 0;
  for (let i = 0; i < s.length; i++) {
    if (match < 0) return false;
    if (s[i] === ")") {
      match--;
    } else {
      match++;
    }
  }
  return match === 0 ? answer : false;
}
