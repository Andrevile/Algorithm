function solution(s) {
  var answer = s.match(/[0-9]/g) !== null ? s.match(/[0-9]/g) : [];
  let result = false;

  if (answer.length === s.length) {
    if (s.length === 4 || s.length === 6) {
      result = true;
    }
  }
  return result;
}
