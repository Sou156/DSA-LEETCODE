// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

var rob = function(nums) {
  let prevSum3 = 0;
  let prevSum2 = 0;
  let prevSum1 = 0;
  
  for (let i = 0; i < nums.length; i++) {
      let sum = Math.max(nums[i]+prevSum2, nums[i]+prevSum3);
      prevSum3 = prevSum2;
      prevSum2 = prevSum1;
      prevSum1 = sum;
  }
  
  return Math.max(prevSum3, prevSum2, prevSum1);
};