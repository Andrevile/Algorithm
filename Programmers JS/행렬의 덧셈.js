function solution(arr1, arr2) {
  var answer = [];
  let first = [...arr1];
  let second = [...arr2];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let k = 0; k < arr1[i].length; k++) {
      temp.push(arr1[i][k] + arr2[i][k]);
    }
    answer.push(temp);
  }

  return answer;
}
