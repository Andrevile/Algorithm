function solution(picks, minerals) {
  let answer = 0;
  let remain_pick_count = picks.reduce((acc, cur) => acc + cur);
  const sliced_mineral_arr = minerals
    .slice(0, remain_pick_count * 5)
    .reduce((acc, cur, idx) => {
      const index = Math.floor(idx / 5);
      if (!acc[index]) {
        acc[index] = [0, 0, 0];
      }
      if (cur === "diamond") acc[index][0]++;
      else if (cur === "iron") acc[index][1]++;
      else if (cur === "stone") acc[index][2]++;
      return acc;
    }, []);

  sliced_mineral_arr.sort((a, b) => {
    if (b[0] === a[0]) {
      return b[1] - a[1];
    }
    return b[0] - a[0];
  });
  for (let [diamond, iron, stone] of sliced_mineral_arr) {
    if (picks[0] > 0) {
      answer += diamond + iron + stone;
      picks[0]--;
    } else if (picks[1] > 0) {
      answer += 5 * diamond + iron + stone;
      picks[1]--;
    } else if (picks[2] > 0) {
      answer += 25 * diamond + 5 * iron + stone;
      picks[2]--;
    }
  }
  return answer;
}
