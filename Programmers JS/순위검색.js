function solution(info, query) {
  var answer = [];
  let map = {};
  let realQuery = query.map((q) => q.replace(/ and /g, "").split(" "));

  info.forEach((i) => {
    let infos = i.split(" ");
    let score = infos.pop();
    getCombinations(infos, score, 0, map);
  });
  for (let key in map) {
    map[key].sort((a, b) => a - b);
  }
  //     console.log(map);
  //     console.log(realQuery)

  realQuery.forEach((query) => {
    let idx;
    if (query[0] in map && map[query[0]].length > 0) {
      idx = BinarySearch(
        map[query[0]],
        0,
        map[query[0]].length,
        Number(query[1])
      );
      answer.push(map[query[0]].length - idx);
    } else {
      answer.push(0);
    }
  });
  return answer;
}

function getCombinations(info, score, index, map) {
  let key = info.join("");
  if (key in map) {
    map[key].push(Number(score));
  } else {
    map[key] = [Number(score)];
  }

  for (let i = index; i < info.length; i++) {
    let combiArr = [...info];
    combiArr[i] = "-";
    getCombinations(combiArr, score, i + 1, map);
  }
}

function BinarySearch(arr, start, end, target) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (target <= arr[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}
