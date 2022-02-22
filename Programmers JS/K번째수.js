function solution(array, commands) {
  var answer = [];
  for (let command of commands) {
    let start = command[0] - 1;
    let finish = command[1];
    let target = command[2] - 1;
    let newArr = array.slice(start, finish).sort((a, b) => a - b);
    answer.push(newArr[target]);
  }
  // commands.forEach((command) => {
  //     let [start,finish,target] = command;
  //     let newArr = array.slice(start-1,finish).sort((a,b) => a-b);
  //     answer.push(newArr[target-1])
  // })
  return answer;
}
