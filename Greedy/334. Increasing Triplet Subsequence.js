/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let answer = false;
  let numI = null;
  let numJ = null;
  for (let k = 0; k < nums.length; k++) {
    if (numI === null || numI >= nums[k]) {
      numI = nums[k];
      continue;
    }

    if (numJ === null || numJ >= nums[k]) {
      numJ = nums[k];
      continue;
    }

    answer = true;
  }

  return answer;
};
