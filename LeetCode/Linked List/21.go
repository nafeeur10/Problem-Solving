/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	ansHead := &ListNode{}
	ans := &ListNode{}
    
    if list1 == nil && list2 == nil {
        return list1
    } else if list1 == nil {
        return list2
    } else if list2 == nil {
        return list1
    }
    

	if list1.Val > list2.Val {
		ansHead = list2
		ans = ansHead
		list2 = list2.Next
	} else {
		ansHead = list1
		ans = ansHead
		list1 = list1.Next
	}

	for {
		if list1 == nil && list2 == nil {
			ansHead = nil
			break
		} else if list1 == nil {
			ansHead.Next = list2
			list2 = list2.Next
		} else if list2 == nil {
			ansHead.Next = list1
			list1 = list1.Next
		} else {
			if list1.Val < list2.Val {
				ansHead.Next = list1
				list1 = list1.Next
			} else {
				ansHead.Next = list2
				list2 = list2.Next
			}
		}
        ansHead = ansHead.Next
	}
	return ans
}
