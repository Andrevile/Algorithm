function solution(plans) {
  const answer = [];
  plans = plans
    .map(([name, start, playtime]) => [
      name,
      convertCurrentTimeToMinutes(start),
      Number(playtime),
    ])
    .sort((a, b) => a[1] - b[1]);
  const job_queue = [];
  while (plans.length > 1) {
    const [current_name, current_start, current_playtime] = plans.shift();
    const [next_name, next_start, next_playtime] = plans[0];
    if (current_start + current_playtime <= next_start) {
      answer.push(current_name);
      let remain_time = next_start - (current_start + current_playtime);
      while (job_queue.length) {
        const [wait_name, wait_playtime] = job_queue.pop();
        if (wait_playtime > remain_time) {
          job_queue.push([wait_name, wait_playtime - remain_time]);
          break;
        } else {
          answer.push(wait_name);
          remain_time -= wait_playtime;
        }
      }
    } else {
      job_queue.push([
        current_name,
        current_playtime - (next_start - current_start),
      ]);
    }
  }
  answer.push(plans[0][0]);
  while (job_queue.length) {
    const [name, start, playtime] = job_queue.pop();
    answer.push(name);
  }
  return answer;
}

function convertCurrentTimeToMinutes(time) {
  const [hour, minute] = time.split(":");
  return Number(hour) * 60 + Number(minute);
}

// function timeToMin(time) {
//   const [hh, mm] = time.split(':').map(Number);
//   return hh * 60 + mm;
// }

// function solution(plans) {
//   const answer = [];

//   const sortedPlans = plans
//     .map(([subject, time, count]) => [subject, timeToMin(time), Number(count)])
//     .sort((a, b) => a[1] - b[1]);

//   const stack = [];

//   for (let i = 0; i < sortedPlans.length - 1; i++) {
//     const [subject, time, count] = sortedPlans[i];

//     if (time + count <= sortedPlans[i + 1][1]) {
//       answer.push(subject);
//       let availableTime = sortedPlans[i + 1][1] - time - count;

//       while (stack.length) {
//         const [currentSubject, currentTime] = stack.pop();
//         if (currentTime <= availableTime) {
//           availableTime -= currentTime;
//           answer.push(currentSubject);
//         } else {
//           stack.push([currentSubject, currentTime - availableTime]);
//           break;
//         }
//       }
//     } else {
//       stack.push([subject, count - (sortedPlans[i + 1][1] - time)]);
//     }
//   }
//   answer.push(sortedPlans[sortedPlans.length - 1][0]);

//   while (stack.length) {
//     answer.push(stack.pop()[0]);
//   }
//   return answer;
// }
