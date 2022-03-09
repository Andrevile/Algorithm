function solution(s) {
  var answer = 0;
  let MIN = Infinity;

  for (let i = 1; i < parseInt(s.length / 2) + 1; i++) {
    let arr = [];
    let temp = "";
    let index = 0;
    while (index < s.length) {
      temp = s.substring(index, index + i);
      arr.push(temp);
      index += i;
    }
    index = 0;
    let count = 1;
    let zip = "";
    while (index < arr.length) {
      if (arr[index] === arr[index + 1]) {
        count++;
      } else {
        zip += count !== 1 ? count.toString() + arr[index] : arr[index];
        count = 1;
      }
      index++;
    }
    if (MIN > zip.length) {
      MIN = zip.length;
    }
  }
  return s.length === 1 ? 1 : MIN;
}
