/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;

  let prev = 0,
    max = 0,
    jump = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    console.log(i, prev, max, jump);
    max = Math.max(max, i + nums[i]);

    if (i === prev) {
      jump++;
      prev = max;
    }
  }

  return jump;
};
