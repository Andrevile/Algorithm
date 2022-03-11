function solution(progresses, speeds) {
  var answer = [];

  let time = 0;
  while (progresses.length > 0) {
    let count = 0;
    while (progresses[0] + speeds[0] * time >= 100) {
      let pop = progresses.shift();
      speeds.shift();
      count++;
    }
    time++;
    if (count > 0) {
      answer.push(count);
    }

    count = 0;
  }
  return answer;
}

// function solution(progresses, speeds) {
//     let answer = [0];
//     let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//     let maxDay = days[0];

//     for(let i = 0, j = 0; i< days.length; i++){

//         if(days[i] <= maxDay) {

//             answer[j] += 1;
//         } else {

//             maxDay = days[i];
//             answer[++j] = 1;
//         }
//     }

//     return answer;
// }
