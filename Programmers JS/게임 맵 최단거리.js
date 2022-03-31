function solution(maps) {
  var answer = 0;
  let visited = [...maps].map((row) => row.map((num) => (num === 0 ? 0 : 1)));
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  visited[0][0] = 0;
  queue = [[0, 0, 1]];
  let pop;
  while (queue.length) {
    pop = queue.shift();

    answer++;
    if (pop[0] === visited.length - 1 && pop[1] === visited[0].length - 1) {
      break;
    }
    for (let dir of direction) {
      let dx = pop[1] + dir[1];
      let dy = pop[0] + dir[0];
      if (0 <= dx && dx < visited[0].length && 0 <= dy && dy < visited.length) {
        if (visited[dy][dx] !== 0) {
          queue.push([dy, dx, pop[2] + 1]);
          visited[dy][dx] = 0;
        }
      }
    }
  }

  return pop[0] === visited.length - 1 && pop[1] === visited[0].length - 1
    ? pop[2]
    : -1;
}
