function solution(lottos, win_nums) {
  var answer = [];
  let prize = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  let correct_count = 0;
  let zero_count = lottos.filter((num) => num === 0).length;
  for (let num of lottos) {
    if (num !== 0 && win_nums.includes(num)) {
      correct_count++;
    }
  }
  answer.push(prize[correct_count + zero_count]);
  answer.push(prize[correct_count]);
  return answer;
}
