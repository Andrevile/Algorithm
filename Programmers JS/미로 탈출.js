function solution(maps) {
  let start_position;
  let new_maps = maps.map((row) => row.split(""));
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "S") {
        start_position = [i, j];
      }
    }
  }
  let find_lever = BFS(new_maps, start_position, "L");
  if (!find_lever) {
    return -1;
  }
  new_maps = maps.map((row) => row.split(""));
  const [lever_row, lever_col, lever_time] = find_lever;
  let find_exit = BFS(new_maps, [lever_row, lever_col], "E");
  if (!find_exit) {
    return -1;
  }
  const [exit_row, exit_col, exit_time] = find_exit;
  return lever_time + exit_time;
}

function BFS(maps, [start_position_row, start_position_col], target) {
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [[start_position_row, start_position_col, 0]];
  maps[start_position_row][start_position_col] = "X";
  while (queue.length > 0) {
    const [row, col, time] = queue.shift();
    if (maps[row][col] === target) {
      return [row, col, time];
    }
    for (let [dr, dc] of direction) {
      const next_row = row + dr;
      const next_col = col + dc;
      if (
        0 <= next_row &&
        next_row < maps.length &&
        0 <= next_col &&
        next_col < maps[0].length
      ) {
        if (maps[next_row][next_col] !== "X") {
          queue.push([next_row, next_col, time + 1]);

          if (maps[next_row][next_col] !== target) {
            maps[next_row][next_col] = "X";
          }
        }
      }
    }
  }
  return false;
}
