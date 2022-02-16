function solution(id_list, report, k) {
  let crime = {};
  let result = {};
  report = new Set(report);
  for (let i = 0; i < id_list.length; i++) {
    crime[id_list[i]] = { prev: [], count: 0 };
    result[id_list[i]] = 0;
  }
  for (item of report) {
    let temp = item.split(" ");
    crime[temp[1]].prev.push(temp[0]);
    crime[temp[1]].count++;
  }
  for (item in crime) {
    if (crime[item].count >= k) {
      for (name of crime[item].prev) {
        result[name]++;
      }
    }
  }
  var answer = Object.values(result);
  return answer;
}
