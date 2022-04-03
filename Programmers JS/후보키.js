function solution(relation) {
  var answer = 0;
  let idxArr = Array.from(Array(relation[0].length), (v, i) => i);
  let compare = relation.length;
  let set = new Set();
  let candidate = new Set();
  let comb = [];
  for (let i = 0; i < relation[0].length; i++) {
    comb.push(...getCombination(idxArr, i + 1));
  }

  comb = checkUniqueness(relation, comb);
  comb = checkMinimality(comb);

  return comb.length;
}

function checkUniqueness(arr, comb) {
  const results = [];
  comb.forEach((v1) => {
    let set = new Set();
    arr.forEach((v2) => {
      set.add(v1.map((e) => v2[e]).join(","));
    });
    if (set.size === arr.length) {
      results.push(v1);
    }
  });
  return results;
}

function checkMinimality(comb) {
  let results = [];
  while (comb.length) {
    results.push(comb[0]);
    comb = comb.reduce((a, c) => {
      let check = comb[0].every((e) => c.includes(e));
      if (!check) {
        a.push(c);
      }
      return a;
    }, []);
  }

  return results;
}

function getCombination(arr, num) {
  let results = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combination = getCombination(rest, num - 1);

    const attached = combination.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
}
