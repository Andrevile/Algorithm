function solution(skill, skill_trees) {
  var answer = 0;
  let skillSet = new Set();
  skill = skill.split("").reverse();
  skill.forEach((sk) => skillSet.add(sk));
  for (let tree of skill_trees) {
    let temp = tree.split("").reverse();
    let tempSkill = [...skill];
    let tempSkillSet = new Set(...skillSet);
    let flag = true;
    while (temp.length) {
      let pop = temp.pop();
      if (skillSet.has(pop)) {
        if (tempSkill[tempSkill.length - 1] === pop) {
          tempSkill.pop();
          tempSkillSet.delete(pop);
        } else {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      answer++;
    }
  }
  return answer;
}
