function solution(N, road, K) {
  var answer = 0;
  let graph = Array.from(new Array(N), () => Array(N).fill(0));
  let visited = Array.from(new Array(N), () => false);

  road.forEach((info) => {
    if (
      graph[info[0] - 1][info[1] - 1] === 0 ||
      graph[info[0] - 1][info[1] - 1] > info[2]
    ) {
      graph[info[0] - 1][info[1] - 1] = info[2];
      graph[info[1] - 1][info[0] - 1] = info[2];
    }
  });
  //  console.log(graph)

  BFS(graph, 0, visited, K);

  return visited.filter((el) => el).length;
}

function BFS(graph, city, visited, K) {
  let queue = [[city, 0]];

  visited[city] = true;
  while (queue.length) {
    queue.sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      } else {
        return 1;
      }
    });
    // console.log(queue)
    // console.log(visited)
    let pop = queue.shift();
    visited[pop[0]] = true;

    for (let i = 0; i < graph[pop[0]].length; i++) {
      if (!visited[i] && graph[pop[0]][i] !== 0) {
        if (pop[1] + graph[pop[0]][i] <= K) {
          queue.push([i, pop[1] + graph[pop[0]][i]]);
        }
      }
    }
  }
}
