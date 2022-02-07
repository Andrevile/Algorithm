function solution(priorities, location) {
  var answer = 0;

  let queue = priorities.map((prior, idx) => {
    return [prior, idx];
  });

  let pop;
  while (queue.length > 0) {
    pop = queue.shift();
    let Max = pop[0];

    for (let i = 0; i < queue.length; i++) {
      if (Max < queue[i][0]) {
        Max = queue[i][0];
        break;
      }
    }
    if (Max !== pop[0]) {
      queue.push(pop);
    } else {
      answer++;
      if (pop[1] === location) {
        break;
      }
    }
  }
  return answer;
}
