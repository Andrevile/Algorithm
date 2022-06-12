let answer = solution();

function solution() {
  const result = [];
  function BFS() {
    let queue = [1];
    while (queue.length) {
      let pop = queue.shift();
      result.push(pop);
      for (let i = 0; i < 2; i++) {
        if (pop * 2 + i <= 7) {
          queue.push(pop * 2 + i);
        }
      }
    }
  }
  BFS();
  return result;
}

console.log(answer.join(" "));

function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}
