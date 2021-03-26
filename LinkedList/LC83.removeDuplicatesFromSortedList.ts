import { ListNode } from "./ListNode";

function removeDuplicatesFromSortedList(head: ListNode) {
    if (!head || !head.next) {
        return head;
    }

    let prev = head;
    let curr: ListNode | null = head.next;
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
