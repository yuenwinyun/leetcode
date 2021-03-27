import compose from "util/compose";

export class ListNode {
    constructor(public val: any, public next: ListNode | null = null) {}
}

export function deserializeListNode(nums: number[]) {
    const sentinel = new ListNode(-9999999);
    let current = sentinel;
    for (const _ of nums) {
        current.next = new ListNode(_);
        current = current.next;
    }
    return sentinel.next;
}

export function serializeListNode(head: ListNode | null) {
    const res: number[] = [];
    let current: ListNode | null = head;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
}

export const listNodePipe = (fn: Function) => compose(serializeListNode, fn, deserializeListNode);
