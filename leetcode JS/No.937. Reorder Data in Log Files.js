/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let letter = [];
  let digit = [];
  for (let log of logs) {
    let temp_log = log.split(" ");

    if (isNaN(temp_log[1]) === false) {
      digit.push(log.split(" "));
    } else {
      letter.push(log.split(" "));
    }
  }
  letter.sort((a, b) => {
    let compare = a
      .slice(1, a.length)
      .join(" ")
      .localeCompare(b.slice(1, b.length).join(" "));
    if (compare === 0) {
      return a[0].localeCompare(b[0]);
    }
    return compare;
  });
  let answer = [];
  for (let log of letter) {
    answer.push(log.join(" "));
  }
  for (let log of digit) {
    answer.push(log.join(" "));
  }
  return answer;
};
