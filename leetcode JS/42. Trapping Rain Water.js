/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  //     let left = 0;
  //     let right = height.length-1;
  //     let max_left = height[left];
  //     let max_right = height[right];
  //     let volume = 0;
  //     while(left < right){
  //         max_left = Math.max(max_left,height[left]);
  //         max_right = Math.max(max_right,height[right]);
  //         if(max_left <= max_right){
  //             volume += max_left - height[left];
  //             left++;
  //         }else{
  //             volume += max_right - height[right];
  //             right--;

  //         }

  //     }
  let stack = [];
  let volume = 0;
  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      let top = stack.pop();
      if (stack.length === 0) {
        break;
      }

      let distance = i - stack[stack.length - 1] - 1;
      let water =
        Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      volume = volume + water * distance;
    }
    stack.push(i);
  }
  return volume;
};
