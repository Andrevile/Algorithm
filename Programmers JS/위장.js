function solution(clothes) {
  var answer = 1;
  let dict = {};

  for (let item of clothes) {
    let kind = item[1];
    let name = item[0];
    if (kind in dict) {
      dict[kind].push(name);
    } else {
      dict[kind] = [name];
    }
  }
  let keys = Object.keys(dict);
  for (let key of keys) {
    answer *= dict[key].length + 1;
  }
  console.log(answer);
  return answer - 1;
}

function getCombinations(arr, num) {
  let results = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combination = getCombinations(rest, num - 1);

    const attached = combination.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
}
