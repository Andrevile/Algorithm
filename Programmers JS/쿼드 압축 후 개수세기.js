var one = 0;
var zero = 0;
function solution(arr) {
  var answer = [];
  divide(arr, 0, arr.length - 1, 0, arr[0].length - 1);
  answer = [zero, one];
  return answer;
}

function check(arr, rowStart, rowEnd, colStart, colEnd) {
  let flag = arr[rowStart][colStart];
  for (let i = rowStart; i < rowEnd + 1; i++) {
    for (let j = colStart; j < colEnd + 1; j++) {
      if (arr[i][j] !== flag) return false;
    }
  }
  return true;
}

function divide(arr, rowStart, rowEnd, colStart, colEnd) {
  let length = (rowEnd - rowStart + 1) / 2 - 1;
  if (rowStart === rowEnd) {
    if (arr[rowStart][colStart] === 1) one++;
    else zero++;
    return;
  }
  let equality = check(arr, rowStart, rowEnd, colStart, colEnd);
  if (equality) {
    if (arr[rowStart][colStart] === 1) one++;
    else zero++;
  } else {
    divide(arr, rowStart, rowStart + length, colStart, colStart + length); //1사분면
    divide(arr, rowStart, rowStart + length, colStart + length + 1, colEnd); //2사분면
    divide(arr, rowStart + length + 1, rowEnd, colStart, colStart + length); //3사분면
    divide(arr, rowStart + length + 1, rowEnd, colStart + length + 1, colEnd); //4사분면
  }
}
