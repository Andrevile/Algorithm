/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let targetIndex = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (targetIndex <= i + nums[i]) {
      targetIndex = i;
    }
  }

  if (targetIndex === 0) {
    return true;
  }
  return false;
};

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function(nums) {
//     let answer = true;
//     let visited = Array.from({length: nums.length}, () => false);

//     answer = finder(nums,0,visited);

//     return answer;

// };

// function finder(nums,index,visited){
//     const current = nums[index];
//     visited[index] = true;
//     let isFinish = false;

//     if(index === nums.length - 1){
//         return true;
//     }

//     if(current === 0 || index >= nums.length){
//         return false;
//     }

//     for(let j = current; j >= 1; j--){
//         if(!visited[index + j]){
//             isFinish = finder(nums,index + j,visited);
//             if(isFinish){
//                 return isFinish;
//             }
//         }
//     }
//     return isFinish
// }
