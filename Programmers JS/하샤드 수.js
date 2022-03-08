function solution(x) {
  var answer = true;
  let sum = x
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);
  return x % sum === 0 ? true : false;
}
