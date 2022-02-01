/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let finish = nums.length;
  while (start < finish) {
    let mid = parseInt((start + finish) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      finish = mid;
    }
  }
  return finish;
};
