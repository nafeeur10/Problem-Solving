

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let valueArray = [];
    let ans = 0;
    
    while(head != null) {
        valueArray.push(head.val)
        head = head.next
    }
    
    let j = 0;
    for(let i = valueArray.length-1; i >=0; i--) {
        ans += valueArray[i] * Math.pow(2, j);
        j++;
    }
    
    return ans;
};

// Best Solution

let getDecimalValue = function(head) {
    let result = 0
    while (head) {
        result = result * 2 + head.val // 1 Left shift of all values will give us the double result. Suppose, 111 = 7 left shift of this 1110 = 14
        /*
        In my solution, I traversal all the nodes from the left-hand side. 
        In each step, I move all the previous node/digits to the left-hand side by 1 (times the result by 2) and add the current node value to get the new result.
        */
        head = head.next
    }
    return result
};
