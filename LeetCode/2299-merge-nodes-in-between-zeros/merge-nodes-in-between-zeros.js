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
 var mergeNodes = function(head) {
    let sum = 0
    let ansArray = []
    let newNode = head
    let firstNode = newNode
    let cnt = 0
    while(head) {
        if(head.val == 0) {
            if(sum > 0) {
                ansArray.push(sum)
            }
            sum = 0
        }

        else {
            sum += head.val
            
        }
        head = head.next
    }

    //console.log(ansArray);
    

    let ii = 0
    let ansNode = firstNode

    while(firstNode && ii < ansArray.length) {
        firstNode.val = ansArray[ii]
        if(ii === ansArray.length -1) {
            firstNode.next = null
            break
        }
        firstNode = firstNode.next
        ii++
    }

    return ansNode
};