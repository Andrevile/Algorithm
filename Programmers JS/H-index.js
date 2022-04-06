function solution(citations) {
  var answer = 0;
  let paper = citations.map((el) => el).sort((a, b) => a - b);

  for (let h = 0; h <= paper.length; h++) {
    let temp = paper.filter((el) => el >= h);
    if (temp.length >= h) answer = h;
  }
  return answer;
}
