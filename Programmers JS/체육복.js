function solution(n, lost, reserve) {
  var answer;
  let students = new Array(n).fill(1);
  lost.forEach((el) => students[el - 1]--);
  reserve.forEach((el) => students[el - 1]++);

  for (let i = 0; i < students.length; i++) {
    if (students[i] === 0) {
      if (i === 0 && students[i + 1] === 2) {
        students[i]++;
        students[i + 1]--;
      } else if (i !== 0) {
        if (students[i - 1] > 1 || students[i + 1] > 1) {
          students[i]++;
          if (students[i - 1] === 2) {
            students[i - 1]--;
          } else {
            students[i + 1]--;
          }
        }
      }
    }
  }
  answer = students.filter((el) => el > 0);
  return answer.length;
}
