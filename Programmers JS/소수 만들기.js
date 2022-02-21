var answer = 0;

function solution(nums) {
  for (let i = 0; i < nums.length; i++) {
    combination(nums, i, nums[i], 1);
  }
  return answer;
}

function combination(nums, cur_idx, sum, sum_count) {
  //console.log("cur_idx: %d sum : %d sum_count : %d",cur_idx,sum,sum_count)
  if (sum_count === 3) {
    if (isPrime(sum)) {
      //    console.log("소수=",sum)
      answer++;
    }
    return;
  }
  for (let i = cur_idx + 1; i < nums.length; i++) {
    combination(nums, i, sum + nums[i], sum_count + 1);
  }
}

function isPrime(num) {
  for (let i = 2; i < parseInt(num / 2) + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
