function solution(n) {
  var answer = [
    ...n
      .toString()
      .split("")
      .map((num) => Number(num))
      .reverse(),
  ];
  return answer;
}
