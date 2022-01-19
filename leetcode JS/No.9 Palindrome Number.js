/**
 * @param {number} x
 * @return {boolean}
 */
//그저 문자열 변환 후 뒤집는 방법
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else {
    let origin = x.toString();
    // console.log(origin)
    let reverse = origin.split("").reverse().join("");
    // console.log(reverse)
    if (origin === reverse) {
      return true;
    } else {
      return false;
    }
  }
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  } else {
    let reverse_num = 0;
    while (x > reverse_num) {
      reverse_num = reverse_num * 10 + (x % 10);
      x = parseInt(x / 10);
    }
    if (x === reverse_num || x === parseInt(reverse_num / 10)) {
      return true;
    } else {
      return false;
    }
  }
};
