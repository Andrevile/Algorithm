function solution(nums) {
  var answer = 0;
  let set = [...new Set(nums)];
  let divide = parseInt(nums.length / 2);

  return set.length >= divide ? divide : set.length;
}
