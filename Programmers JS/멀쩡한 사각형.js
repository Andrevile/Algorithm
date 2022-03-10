function solution(w, h) {
  var answer = 1;
  let gcd = GCD(w, h);
  answer =
    w > h ? (w / gcd + (h / gcd - 1)) * gcd : (h / gcd + (w / gcd - 1)) * gcd;
  return w * h - answer;
}

function GCD(a, b) {
  if (a > b) {
    let temp = b;
    b = a;
    a = temp;
  }
  while (a !== 0) {
    let q = b % a;
    b = a;
    a = q;
  }
  return b;
}
