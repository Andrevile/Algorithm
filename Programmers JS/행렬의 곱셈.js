function solution(arr1, arr2) {
  let resultRow = arr1.length;
  let resultCol = arr2[0].length;
  let answer = Array.from(Array(resultRow), () => new Array(resultCol).fill(0));
  for (let row = 0; row < resultRow; row++) {
    for (let col = 0; col < resultCol; col++) {
      let temp = 0;
      for (let j = 0; j < arr2.length; j++) {
        temp += arr1[row][j] * arr2[j][col];
      }
      answer[row][col] = temp;
    }
  }
  return answer;
}
