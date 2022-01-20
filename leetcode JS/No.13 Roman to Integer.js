/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbol_map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let roman_arr = s.split("");
  idx = 0;
  let answer = 0;
  while (idx < roman_arr.length - 1) {
    if (symbol_map[roman_arr[idx]] >= symbol_map[roman_arr[idx + 1]]) {
      answer += symbol_map[roman_arr[idx]];
    } else {
      answer -= symbol_map[roman_arr[idx]];
    }
    idx++;
  }
  answer += symbol_map[roman_arr[idx]];
  return answer;
};
