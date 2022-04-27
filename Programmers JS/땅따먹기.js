function solution(land) {
  var answer = 0;
  let DP = Array.from(Array(land.length), () => Array(4).fill(0));
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      land[i][j] =
        land[i][j] + Math.max(...land[i - 1].filter((num, i) => i !== j));
    }
  }
  answer = Math.max(...land[land.length - 1]);
  return answer;
}
