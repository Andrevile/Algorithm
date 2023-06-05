function solution(maps) {
  let answer = [];
  maps = maps.map((row) => row.split(""));
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== "X") {
        console.log(i, j);
        const food_count = BFS(maps, [i, j]);
        answer.push(food_count);
      }
    }
  }
  if (answer.length > 0) {
    answer.sort((a, b) => a - b);
  } else {
    answer.push(-1);
  }
  return answer;
}

function BFS(maps, start_position) {
  let sum = parseInt(maps[start_position[0]][start_position[1]]);
  maps[start_position[0]][start_position[1]] = "X";
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const queue = [start_position];
  while (queue.length) {
    const [row, col] = queue.shift();
    for (let i = 0; i < direction.length; i++) {
      const [dr, dc] = direction[i];
      const next_row = row + dr;
      const next_col = col + dc;
      if (
        0 <= next_row &&
        next_row < maps.length &&
        0 <= next_col &&
        next_col < maps[0].length
      ) {
        if (maps[next_row][next_col] !== "X") {
          queue.push([next_row, next_col]);
          sum += parseInt(maps[next_row][next_col]);
          maps[next_row][next_col] = "X";
        }
      }
    }
  }

  return sum;
}
