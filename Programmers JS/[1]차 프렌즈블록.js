var direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function solution(m, n, board) {
  var answer = 0;
  let row = m;
  let col = n;
  let graph = board.map((row) => row.split(""));
  while (true) {
    let founded = [];
    for (let i = 0; i < row - 1; i++) {
      for (let j = 0; j < col - 1; j++) {
        let character = graph[i][j];
        if (character !== -1) {
          if (boomCheck(graph, [i, j], character)) {
            founded.push([i, j]);
          }
        }
      }
    }

    if (!founded.length) break;

    answer += boom(graph, founded);
    reAssign(graph);
  }
  return answer;
}

function boomCheck(graph, currentPos, character) {
  let checkDir = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  for (let dir of checkDir) {
    let dy = currentPos[0] + dir[0];
    let dx = currentPos[1] + dir[1];
    if (graph[dy][dx] !== character) return false;
  }

  return true;
}

function boom(graph, founded) {
  let count = 0;
  for (let pos of founded) {
    if (graph[pos[0]][pos[1]] !== -1) {
      graph[pos[0]][pos[1]] = -1;
      count++;
    }
    if (graph[pos[0]][pos[1] + 1] !== -1) {
      graph[pos[0]][pos[1] + 1] = -1;
      count++;
    }
    if (graph[pos[0] + 1][pos[1]] !== -1) {
      graph[pos[0] + 1][pos[1]] = -1;
      count++;
    }
    if (graph[pos[0] + 1][pos[1] + 1] !== -1) {
      graph[pos[0] + 1][pos[1] + 1] = -1;
      count++;
    }
  }
  return count;
}

function reAssign(board) {
  for (let col = 0; col < board[0].length; col++) {
    let stack = [];
    for (let row = board.length - 1; row >= 0; row--) {
      if (board[row][col] !== -1) {
        stack.push(board[row][col]);
      }
    }
    for (let row = board.length - 1; row >= 0; row--) {
      if (stack.length) {
        board[row][col] = stack.shift();
      } else {
        board[row][col] = -1;
      }
    }
  }
}
