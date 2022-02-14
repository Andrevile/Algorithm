/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let num_arr = nums.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < num_arr.length; i++) {
    if (i % 2 === 0) {
      answer += num_arr[i];
    }
  }
  return answer;
};
