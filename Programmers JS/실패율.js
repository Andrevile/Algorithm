function solution(N, stages) {
  var answer = [];

  let temp = [];
  for (let i = 1; i < N + 1; i++) {
    let non_clear = [...stages].filter((el) => el === i).length;
    let reach_people = [...stages].filter((el) => el >= i).length;
    temp.push([i, get_failure_rate(non_clear, reach_people)]);
  }
  temp.sort((a, b) => b[1] - a[1]);
  answer = temp.map((el) => el[0]);
  return answer;
}

function get_failure_rate(non_clear, reach_people) {
  return non_clear / reach_people;
}
