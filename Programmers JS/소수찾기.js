function solution(n) {
  var answer = 0;
  let isPrime = Array(n + 1).fill(true);

  for (let i = 2; i < parseInt(Math.sqrt(n + 1)) + 1; i++) {
    if (isPrime[i] === true) {
      for (let j = i * 2; j < n + 1; j += i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i < n + 1; i++) {
    if (isPrime[i] === true) {
      answer++;
    }
  }
  return answer;
}
