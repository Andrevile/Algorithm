function solution(n) {
  let test = Array.from({ length: n + 1 }, () => 0);
  test[1] = 1;
  for (let i = 2; i <= n; i++) {
    test[i] = (test[i - 1] + test[i - 2]) % 1234567;
  }
  return test[test.length - 1];
}
