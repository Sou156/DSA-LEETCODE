// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 
// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0)
      return false;
  for (let row of matrix) {
      if (row.length > 0 && row[0] <= target && row[row.length - 1] >= target) {
          if (binarySearch(row, target)) {
              return true;
          }
      }
  }
  return false;
};

function binarySearch(list, target) {
  let min = 0;
  let max = list.length;
  while (min < max) {
      const pivot = min + Math.floor((max - min) / 2);
      if (list[pivot] === target)
          return true;
      else {
          if (list[pivot] < target) {
              min = pivot + 1;
          } else {
              max = pivot;
          }
      }
  }
  return false;
}