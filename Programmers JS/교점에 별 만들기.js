function solution(line) {
  var answer = [];
  let crossLineComb = getCombinations(line, 2);
  for (let lines of crossLineComb) {
    let temp = getStar(lines[0], lines[1]);
    if (temp !== false) {
      let [x, y] = temp;
      if (x === Math.ceil(x) && y === Math.ceil(y)) answer.push([x, y]);
    }
  }
  let maxRow = Number.MIN_SAFE_INTEGER;
  let minRow = Number.MAX_SAFE_INTEGER;
  let maxCol = Number.MIN_SAFE_INTEGER;
  let minCol = Number.MAX_SAFE_INTEGER;
  for (let dot of answer) {
    let [x, y] = dot;
    if (maxRow < y) maxRow = y;
    if (minRow > y) minRow = y;
    if (maxCol < x) maxCol = x;
    if (minCol > x) minCol = x;
  }
  let rowRange = Math.abs(maxRow - minRow);
  let colRange = Math.abs(maxCol - minCol);
  const board = Array.from(Array(rowRange + 1), () =>
    Array(colRange + 1).fill(".")
  );
  let diff = [maxRow, -minCol];
  for (let pos of answer) {
    let row = pos[1];
    let col = pos[0];
    board[diff[0] - row][diff[1] + col] = "*";
  }
  let result = [];
  board.forEach((row) => {
    result.push(row.join(""));
  });
  return result;
}

function getCombinations(arr, num) {
  const results = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combination = getCombinations(rest, num - 1);

    const attached = combination.map((el) => [fixed, ...el]);

    results.push(...attached);
  });
  return results;
}

function getStar(first, second) {
  let [A, B, E] = first;
  let [C, D, F] = second;

  if (A * D - B * C) {
    let x = (B * F - E * D) / (A * D - B * C);
    let y = (E * C - A * F) / (A * D - B * C);

    return [x, y];
  } else {
    return false;
  }
}
