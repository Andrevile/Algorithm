function solution(participant, completion) {
  var answer = "";
  let people = {};
  // for(let person of participant){
  //     {person in people ? people[person]++ : people[person] = 1}
  // }
  // for(let person of completion){
  //     people[person] --;
  // }
  // for(let person in people){
  //     if(people[person] > 0){
  //         answer = person
  //     }
  // }

  participant.forEach((person) =>
    person in people ? people[person]++ : (people[person] = 1)
  );
  completion.forEach((person) => people[person]--);
  for (let person in people) {
    if (people[person] > 0) {
      answer = person;
    }
  }
  return answer;
}
