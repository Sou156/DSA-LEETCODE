// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


var canJump = function(nums) {
  let currentReach = 0;
  
  for (let x = 0; x < nums.length; x++) {
      const number = nums[x];
      
      if (currentReach < x) break;
      
      currentReach = Math.max(currentReach, x + number);
  }
      
  return currentReach >= nums.length - 1;
};

console.log(canJump([2,3,1,1,4]));