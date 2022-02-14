/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let out = [];
  let cursor = 1;
  for (let i = 0; i < nums.length; i++) {
    out.push(cursor);
    cursor *= nums[i];
  }
  cursor = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    out[i] *= cursor;
    cursor *= nums[i];
  }
  return out;
};
