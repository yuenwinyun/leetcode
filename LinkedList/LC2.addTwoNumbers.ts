import { ListNode } from "data-structure/ListNode";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            carry += l2.val;
            l2 = l2.next;
        }
        current.next = new ListNode(carry % 10);
        current = current.next;
        carry = Math.floor(carry / 10);
    }
    return dummy.next;
}
