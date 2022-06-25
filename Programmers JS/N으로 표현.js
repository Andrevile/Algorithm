function solution(N, number) {
  var answer = 0;
  const dp = Array.from({ length: 9 }, () => new Set());
  if (N === number) return 1;

  dp.forEach((set, i) => {
    if (i !== 0) set.add(Number(N.toString().repeat(i)));
  });

  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < i; j++) {
      for (let post of dp[j]) {
        for (let prev of dp[i - j]) {
          dp[i].add(post + prev);
          dp[i].add(post - prev);
          dp[i].add(post * prev);
          dp[i].add(Math.floor(post / prev));
        }
      }
      if (dp[i].has(number)) return i;
    }
  }
  return -1;
}
