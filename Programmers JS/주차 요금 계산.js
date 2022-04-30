function solution(fees, records) {
  var answer = [];
  let log = {};
  let noCheckOutTime = 60 * 23 + 59;

  for (let record of records) {
    let [time, number, check] = parseRecord(record);
    if (check === "IN") {
      if (number in log) {
        log[number] = [time, check, log[number][2]];
      } else {
        log[number] = [time, check, 0];
      }
    } else {
      log[number] = [
        time - log[number][0],
        check,
        log[number][2] + time - log[number][0],
      ];
    }
  }
  for (let car in log) {
    if (log[car][1] === "IN") {
      log[car] = [
        noCheckOutTime - log[car][0],
        "OUT",
        log[car][2] + noCheckOutTime - log[car][0],
      ];
    }
  }
  for (let car in log) {
    let fee = getPrice(log[car][2], fees);
    answer.push([Number(car), fee]);
  }
  answer = answer.sort((a, b) => a[0] - b[0]).map((el) => el[1]);
  return answer;
}

function parseRecord(string) {
  let [time, number, check] = string.split(" ");
  time = 60 * parseInt(time.split(":")[0]) + parseInt(time.split(":")[1]);
  return [time, number, check];
}

function getPrice(timeDiff, fees) {
  let totalPrice = 0;
  let [basicTime, basicFee, unitTime, unitFee] = fees;
  if (timeDiff <= basicTime) {
    totalPrice += basicFee;
  } else {
    totalPrice += basicFee;
    timeDiff -= basicTime;
    let multiple = Math.ceil(timeDiff / unitTime);
    totalPrice += unitFee * multiple;
  }
  return totalPrice;
}
