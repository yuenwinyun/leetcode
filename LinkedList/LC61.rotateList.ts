import { ListNode } from "./ListNode";

export function rotateList(head: ListNode | null, k: number) {
    const stack: (ListNode | null)[] = [];
    let current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }
    k %= stack.length;
    while (k > 0 && stack.length > 1) {
        const tail = stack.pop()!;
        const prev = stack[stack.length - 1]!;
        // should be more than on ListNode
        prev.next = null;
        tail.next = stack[0];
        stack.unshift(tail);
        k--;
    }
    return stack[0] || head;
}
