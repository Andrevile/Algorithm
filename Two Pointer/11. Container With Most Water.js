/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let answer = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const distance = right - left;
    const tall = Math.min(height[left], height[right]);
    const volume = distance * tall;
    if (answer < volume) {
      answer = volume;
    }
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return answer;
};
