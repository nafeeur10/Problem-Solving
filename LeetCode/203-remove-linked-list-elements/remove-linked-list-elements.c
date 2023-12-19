/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* removeElements(struct ListNode* head, int val) {
    if(head == NULL) return head;

    while(head != NULL && head->val == val) {
        head = head->next;
    }

    struct ListNode* root = head;

    while(head != NULL && head->next != NULL) {
        if(head->next->val == val) {
            head->next = head->next->next;  
        } else {
            head = head->next;
        }
    }
    return root;
}