"use strict";

const fs = require("fs");
const [N, coins, M] = fs.readFileSync("./dev/stdin").toString().split("\n");

let answer = solution(N, coins, M);

function solution(N, coins, M) {
  N = Number(N);
  coins = coins.split(" ").map((el) => Number(el));
  M = Number(M);
  const dp = Array.from({ length: 16 }, () => 501);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    for (let j = coin; j <= M; j++) {
      dp[j] = Math.min(dp[j], dp[j - coin] + 1);
    }
  }
  return dp[M];
}

console.log(answer);

function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}
