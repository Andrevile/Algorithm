function solution(s) {
  let str = s.substring(2, s.length - 2).split("},{");
  let arr = [];
  var answer = new Set();
  str.forEach((item) => {
    let temp = item.split(",").map((el) => Number(el));
    arr.push(temp);
  });
  arr.sort((a, b) => {
    if (b.length > a.length) {
      return -1;
    } else {
      return 1;
    }
  });
  arr.forEach((item) => {
    item.forEach((num) => {
      answer.add(num);
    });
  });
  let result = [];
  answer.forEach((el) => result.push(el));

  return result;
}
