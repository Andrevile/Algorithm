function solution(n) {
  let count = 0;
  while (n !== 0) {
    let mod = n % 2;
    n = parseInt(n / 2);
    if (mod) count++;
  }

  return count;
}
