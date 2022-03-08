function solution(n, m) {
  var answer = [getGCD(n, m), getLCM(n, m, getGCD(n, m))];
  return answer;
}

function getGCD(n, m) {
  let small = n;
  let bigger = m;
  if (n > m) {
    small = m;
    bigger = n;
  }
  while (small !== 0) {
    let q = bigger % small;
    bigger = small;
    small = q;
  }
  return bigger;
}

function getLCM(n, m, gcd) {
  let prev = n / gcd;
  let post = m / gcd;
  return prev * post * gcd;
}
