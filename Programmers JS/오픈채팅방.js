function solution(record) {
  var answer = [];
  let user = {};
  record.forEach((log) => {
    log = log.split(" ");
    if (log[0] !== "Leave") {
      user[log[1]] = log[2];
    }
  });
  record.forEach((log) => {
    log = log.split(" ");
    if (log[0] === "Enter") {
      answer.push(user[log[1]] + "님이 들어왔습니다.");
    } else if (log[0] === "Leave") {
      answer.push(user[log[1]] + "님이 나갔습니다.");
    }
  });
  return answer;
}
