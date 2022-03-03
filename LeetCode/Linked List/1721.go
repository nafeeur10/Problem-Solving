/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getLengthOfLinkedList(head *ListNode) int {
	headCopy := head
	cnt := 0
	for headCopy != nil {
		headCopy = headCopy.Next
		cnt++
	}
	return cnt
}

func getNodeToSwap(head *ListNode, k int) *ListNode {
	cnt := 1
	var newNode *ListNode = nil
	for head != nil {
		if cnt == k {
			newNode = head
			break
		}
		head = head.Next
		cnt++
	}
	return newNode
}

func swapNodes(head *ListNode, k int) *ListNode {
	newNode := ListNode{0, nil}

	newNode.Val = head.Val
	newNode.Next = head.Next

	length := getLengthOfLinkedList(&newNode)

	firstK := k
	secondK := length - (k - 1)

	firstNodeToSwap := getNodeToSwap(head, firstK)
	secondNodeToSwap := getNodeToSwap(head, secondK)

	firstNodeToSwap.Val, secondNodeToSwap.Val = secondNodeToSwap.Val, firstNodeToSwap.Val

	return head
}
