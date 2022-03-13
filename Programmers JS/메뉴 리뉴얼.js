function solution(orders, course) {
  var answer = [];

  for (let num of course) {
    let foods = {};
    let temp = "";
    let MAX = 0;
    for (let food of orders) {
      let test = combination(food, num, [], 0, "");
      for (let comb of test) {
        if (comb in foods) {
          foods[comb]++;
        } else {
          foods[comb] = 1;
        }
      }
    }

    // for(let item in foods){
    //     if(foods[item] > MAX && foods[item] > 1){
    //         MAX = foods[item]
    //     }
    // }
    MAX = Math.max(...Object.values(foods));
    let arr = Object.keys(foods).filter(
      (food) => foods[food] === MAX && MAX > 1
    );
    answer.push(...arr);
    // if(MAX > 1){
    //     for(let item in foods){
    //         if(foods[item] === MAX){
    //             answer.push(item)
    //         }
    //     }
    // }
  }

  return answer.sort((a, b) => (a < b ? -1 : 1));
}

function combination(string, length, arr, index, cur) {
  if (cur.length === length) {
    cur = cur
      .split("")
      .sort((a, b) => (a < b ? -1 : 1))
      .join("");
    arr.push(cur);
    return;
  }
  for (let i = index; i < string.length; i++) {
    combination(string, length, arr, i + 1, cur + string[i]);
  }

  return arr;
}
