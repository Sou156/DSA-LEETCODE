// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

// Return any such subsequence as an integer array of length k.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

//  Example 1: 
// Input: nums = [2,1,3,3], k = 2
// Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.

var maxSubsequence = function(nums, k) {
  return nums.map((v,i)=>[v,i]).sort((a,b)=>a[0]-b[0]).slice(-k).sort((a,b)=>a[1]-b[1]).map(x=>x[0]);
};