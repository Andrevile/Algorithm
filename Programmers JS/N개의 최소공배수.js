function solution(arr) {
  var answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

function lcm(a, b) {
  if (a < b) {
    [a, b] = [b, a];
  }
  return parseInt((a * b) / gcd(a, b));
}

function gcd(a, b) {
  if (a < b) {
    [a, b] = [b, a];
  }

  while (b > 0) {
    [a, b] = [b, a % b];
  }

  return a;
}
