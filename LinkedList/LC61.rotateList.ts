import { ListNode } from "data-structure/ListNode";

export function rotateList(head: ListNode | null, k: number): ListNode | null {
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

export function goodPractice(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    // fast-slow pointer
    let current: ListNode | null = head;
    let N = 0;
    while (current) {
        N++;
        current = current.next;
    }
    k %= N;
    if (k === 0) {
        return head;
    }
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    // keep distance between fast and slow is k;
    while (k > 0) {
        fast = fast && fast.next;
        k--;
    }
    while (fast && fast.next) {
        fast = fast.next;
        slow = slow!.next;
    }
    const rotatedHead = slow!.next;
    slow!.next = null;
    fast!.next = head;
    return rotatedHead;
}
