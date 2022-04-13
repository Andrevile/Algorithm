function solution(people, limit) {
  var answer = 0;
  people = people.sort((a, b) => b - a);

  let start = 0;
  let finish = people.length - 1;

  while (start <= finish) {
    answer++;
    let pop = people[start++];
    if (limit - pop >= people[finish]) {
      finish--;
    }
  }

  return answer;
}
