function solution(lines) {
  var answer = 0;
  let arr = [];
  let log = [];
  let maxCount = 0;
  for (line of lines) {
    let temp = line.split(" ");
    const duration = temp[2]
      .split(/[.s]/g)
      .filter((number) => number.length > 0);
    const timer =
      duration.length > 1
        ? parseInt(duration[0]) * 1000 + parseInt(duration[1])
        : parseInt(duration[0]) * 1000;
    let start = convertMS(temp[1]) - timer + 1;
    arr.push([start, convertMS(temp[1])]);
    log.push(start, convertMS(temp[1]));
  }

  for (let process of log) {
    let count = 0;
    let startRange = process;
    let finishRange = process + 1000;
    for (let i = 0; i < arr.length; i++) {
      let begin = arr[i][0];
      let end = arr[i][1];

      if (
        (startRange <= begin && begin < finishRange) ||
        (startRange <= end && end < finishRange) ||
        (startRange >= begin && end >= finishRange)
      )
        count++;
    }
    if (maxCount < count) maxCount = count;
  }
  answer = maxCount;
  return answer;
}

function convertMS(time) {
  time = time.split(/[:.]/g).map((el) => Number(el));
  return (time[0] * 3600 + time[1] * 60 + time[2]) * 1000 + time[3];
}
