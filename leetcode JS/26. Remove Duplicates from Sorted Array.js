/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length - 1) {
    j = i + 1;
    if (nums[i] === nums[j]) {
      nums.splice(j, 1);
    } else {
      i++;
    }
  }
};
