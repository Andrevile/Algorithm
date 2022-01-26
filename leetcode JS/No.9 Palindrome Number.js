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
  if (x < 0 || (x % 10 === 0 && x !== 0)) {//음수면 팰린드롬 수가 될수 없음
                                           //0보다 크고 끝자리가 0이면 팰린드롬 수가 될 수 없음
                                           //0은 팰린드롬 수가 맞음
    return false;
  } else {
    let reverse_num = 0;
    while (x > reverse_num) {
      reverse_num = reverse_num * 10 + (x % 10);
      x = parseInt(x / 10);
    }
    if (x === reverse_num || x === parseInt(reverse_num / 10)) {//만약 자릿수가 홀수개면
                                                                //reverse_num이 더커지는데
                                                                //이는 10을 나누면 똑같음, 중간숫자는 의미없기 때문
      return true;
    } else {
      return false;
    }
  }
};


