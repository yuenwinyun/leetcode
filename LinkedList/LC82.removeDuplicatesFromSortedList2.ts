import { ListNode } from "data-structure/ListNode";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    if (head.val !== head.next.val) {
        head.next = deleteDuplicates(head.next);
    } else {
        let nextNode: ListNode | null = head.next;
        while (nextNode && nextNode.val === head.val) {
            nextNode = nextNode.next;
        }
        return deleteDuplicates(nextNode);
    }
    return head;
}
