// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

//Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

var mergeKLists = function(lists) {
  let allVals = []
 for(let x = 0; x < lists.length; x++){
     let cur = lists[x]
     while(cur){
         allVals.push(cur.val)
         cur = cur.next
     }
 }
 allVals.sort((a,b) => a-b)
 let result = new ListNode()
 let current = result
 allVals.forEach(val => {
     current.next = new ListNode(val)
     current = current.next
 })
 return result.next
};