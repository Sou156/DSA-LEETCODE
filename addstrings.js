//Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

//Example 1:
//Input: num1 = "11", num2 = "123"
// Output: "134"

var addStrings = function(num1, num2) {
  return    `${BigInt(num1) + BigInt(num2)}`;
};