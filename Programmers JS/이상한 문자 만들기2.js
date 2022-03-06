function solution(s) {
  let arr = s.split(" ");
  let answer = arr.map((str) =>
    str
      .split("")
      .map((c, idx) => (idx % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
      .join("")
  );
  return answer.join(" ");
}
