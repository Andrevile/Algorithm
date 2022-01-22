/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let temp = "";
  let result = "";
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let idx = temp.indexOf(s[i]);
    if (idx !== -1) {
      start = start + idx + 1;
    }
    temp = s.substring(start, i + 1);
    if (result.length < temp.length) {
      result = temp;
    }
  }
  return result.length;
};
