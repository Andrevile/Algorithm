/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s;
  }
  let answer = "";

  for (let i = 0; i < s.length - 1; i++) {
    let odd = expand(i, i + 2, s);
    let even = expand(i, i + 1, s);
    let compare = odd.length > even.length ? odd : even;

    answer = answer.length > compare.length ? answer : compare;
  }
  return answer;
};

function expand(left, right, s) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }
  return s.substring(left + 1, right);
}
