// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//Example 1: 
// Input: nums = [3,2,3]
// Output: 3

var majorityElement = function(nums) {
  var count=0

for(let i=0;i<nums.length;i++){
  count ? 1 : el=nums[i]
  nums[i]==el?count++:count--
}
return el  
};