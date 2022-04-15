function solution(n, wires) {
  var answer = -1;
  let result = [];
  let graph = {};
  for (let i = 1; i < n; i++) graph[i] = [];
  for (let link of wires) {
    if (link[0] in graph) graph[link[0]].push(link[1]);
    else graph[link[0]] = [link[1]];

    if (link[1] in graph) graph[link[1]].push(link[0]);
    else graph[link[1]] = [link[0]];
  }
  for (let i = 0; i < wires.length; i++) {
    result.push(splitNetwork(wires, graph, i, n));
  }

  return Math.min(...result);
}

function splitNetwork(wires, graph, index, n) {
  let tempWires = wires.map((el) => el);
  let pop = tempWires.splice(index, 1)[0];
  let splitNetwork = {};
  let visited = Array.from({ length: n }, () => false);
  for (let i = 1; i <= n; i++) splitNetwork[i] = [];
  for (let link of tempWires) {
    if (link[0] in splitNetwork) splitNetwork[link[0]].push(link[1]);
    else splitNetwork[link[0]] = [link[1]];

    if (link[1] in splitNetwork) splitNetwork[link[1]].push(link[0]);
    else splitNetwork[link[1]] = [link[0]];
  }
  let first = 0;
  let second = 0;
  first = DFS(visited, splitNetwork, pop[0]);
  second = DFS(visited, splitNetwork, pop[1]);
  return Math.abs(first - second);
}

function DFS(visited, splitNetwork, node) {
  visited[node - 1] = true;
  let count = 1;
  let current = -1;
  for (let i = 0; i < splitNetwork[node].length; i++) {
    let next = splitNetwork[node][i];
    if (!visited[next - 1]) {
      current = i;
      count += DFS(visited, splitNetwork, next);
    }
  }
  if (current === -1) return 1;
  return count;
}
