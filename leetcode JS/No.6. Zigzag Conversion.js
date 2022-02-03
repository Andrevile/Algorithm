/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  } else {
    let arr = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
      arr[i] = new Array();
    }
    let start = 0;
    let current_row = 0;
    let current_col = 0;
    let direction = 0;
    while (start < s.length) {
      if (current_row === numRows - 1) {
        direction = 1;
      } else if (current_row === 0) {
        direction = 0;
      }
      arr[current_row][current_col] = s[start];
      if (direction === 0) {
        current_row++;
      } else {
        current_row--;
        current_col++;
      }
      start++;
    }
    let answer = "";
    for (let i = 0; i < arr.length; i++) {
      answer += arr[i].join("");
    }
    return answer;
  }
};
