function solution(files) {
  var answer = [];

  let keyFiles = files.map((el) => [el, ...parsing(el)]);

  answer = keyFiles
    .sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      } else if (a[1] > b[1]) {
        return 1;
      } else {
        return a[2] - b[2];
      }
    })
    .map((el) => el[0]);

  return answer;
}

function parsing(filename) {
  let head = "";
  let number = "";
  let tail = "";
  let index = 0;
  while (/[^0-9]/.test(filename[index])) {
    head += filename[index];
    index++;
  }
  while (/[0-9]/.test(filename[index])) {
    number += filename[index];
    index++;
  }
  head = head.toLowerCase();
  number = parseInt(number).toString();
  tail = filename.substring(index);
  return [head, number, tail];
}
