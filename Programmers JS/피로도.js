function solution(k, dungeons) {
  var answer = [];
  let visited = dungeons.map((el) => false);
  DFS(dungeons, 0, k, visited, answer);
  // let order = getPermutations(dungeons,dungeons.length);
  // for(let i = 0; i < order.length; i++){
  //     let point = k;
  //     let currentOrder = order[i];
  //     let count = 0;
  //     while(currentOrder.length){
  //         let pop = currentOrder.shift();
  //         if( point >= pop[0]){
  //             point -= pop[1];
  //             count ++;
  //         }
  //     }
  //     answer.push(count);
  // }
  console.log(answer);
  return Math.max(...answer);
}

function DFS(dungeons, count, k, visited, answer) {
  answer.push(count);
  for (let i = 0; i < dungeons.length; i++) {
    let current = dungeons[i];
    if (k >= current[0] && !visited[i]) {
      visited[i] = true;
      DFS(dungeons, count + 1, k - current[1], visited, answer);
      visited[i] = false;
    }
  }
}

function getPermutations(arr, num) {
  const results = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    const permutation = getPermutations(rest, num - 1);

    const attached = permutation.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
}
