import { ListNode } from "../data-structure/ListNode";

export function removeDuplicatesFromSortedList(head: ListNode | null) {
    if (!head || !head.next) {
        return head;
    }
    // constant space
    let prev = head;
    let curr: ListNode | null = head.next;
    // O(N)
    while (curr) {
        if (prev.val === curr.val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return head;
}
