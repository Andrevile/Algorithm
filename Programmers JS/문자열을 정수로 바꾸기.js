function solution(s) {
  var answer = 0;

  return s[0] === "-" ? Number(s.substring(1)) * -1 : Number(s);
}
