/*
Problem Link: https://leetcode.com/problems/reverse-linked-list/
Algo: Linked List
Language: JS
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null) {
        return head
    }
    
    let previous = null;
    
    while(head != null) {
        let temp = head.next;
        head.next = previous;
        previous = head;
        head = temp;
    }
    
    return previous;
};
