function solution(a, b) {
  var answer = "";
  let count = 0;
  let weeks = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  for (let i = 1; i < a; i++) {
    count += getDay(i);
  }
  count += b - 1;
  answer = weeks[count % 7];
  return answer;
}

function getDay(i) {
  let days = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  return days[i];
}
