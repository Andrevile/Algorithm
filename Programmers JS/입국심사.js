function solution(n, times) {
  var answer = 0;
  let left = 0;
  let right = Math.max(...times) * n + 1;

  function lowerBound(start, end, target) {
    while (start < end) {
      let people = 0;

      let mid = parseInt((start + end) / 2, 10);
      console.log(mid);
      for (let t of times) {
        people += parseInt(mid / t, 10);
      }
      if (target <= people) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  }
  answer = lowerBound(left, right, n);
  return answer;
}
