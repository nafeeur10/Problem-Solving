/**
 * Definition for singly-linked list.
 /*
 Problem Link: https://leetcode.com/problems/middle-of-the-linked-list/
 Algo: Linked List
 Solution Language: JS
 */
 
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let cnt = 0;
    let store = head;
    while(head) {
        cnt++;
        head = head.next;
    }
    
    let middle = 0;
    
    if(cnt%2===0) middle = cnt/2;
    else middle = (cnt-1)/2;
    
    let secondCnt = 0;
    let ans = store;
    
    while(store) {
        secondCnt++;
        if(secondCnt === middle + 1) {
            ans = store;
            break;
        }
        store = store.next
    }
    return ans
};
