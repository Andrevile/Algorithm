function solution(s) {
  let answer = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (/[0-9]/.test(s[i])) answer += s[i];
    else {
      if (s[i] === " ") answer += s[i];
      else {
        if (i === 0 || s[i - 1] === " ") answer += s[i].toUpperCase();
        else answer += s[i];
      }
    }
  }
  return answer;
}
