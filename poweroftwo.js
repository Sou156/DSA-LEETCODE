// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1


var isPowerOfTwo = function(n) {
  let i = 0;
  let total = 0;
  
  if (n === 0) {
      return false; 
  }
  while (total < n){
      total = Math.pow(2, i);
      // console.log(total);
      i++;
  }
  
  return n === total;
};

console.log(isPowerOfTwo(7))