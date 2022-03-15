var answer = [];
var direction = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
function solution(places) {
  for (let item of places) {
    let flag = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (item[i][j] === "P") {
          let visited = [...item.map((el) => el.split(""))];
          let result = DFS(visited, [i, j], [i, j], 0);
          // console.log("item",item);
          // console.log(i,j);
          // console.log(result)
          if (!result) {
            flag = 1;
          }
        }
      }
    }
    if (flag === 1) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  }

  return answer;
}

function DFS(visited, start, current, depth) {
  let result = true;
  visited[current[0]][current[1]] = "X";

  for (let dir of direction) {
    let dx = current[0] + dir[0];
    let dy = current[1] + dir[1];

    if (0 <= dx && dx < 5 && 0 <= dy && dy < 5) {
      // console.log("why",[dx,dy],depth)
      // console.log("visited",visited[dx][dy],depth)
      if (visited[dx][dy] !== "X" && get_distance(start, [dx, dy]) <= 2) {
        // console.log("check",start,current,[dx,dy])
        if (visited[dx][dy] === "P") {
          // console.log("dxdy",start,[dx,dy])
          return false;
        }
        result = DFS(visited, start, [dx, dy], depth + 1);
      }
    }
  }
  return result;
}

function get_distance(t1, t2) {
  return Math.abs(t1[0] - t2[0]) + Math.abs(t1[1] - t2[1]);
}
