import compose from "util/compose";

export class ListNode<T = number> {
    constructor(public val: T, public next: ListNode<T> | null = null) {}
}

export function deserialize(nums: number[]) {
    const sentinel = new ListNode(-9999999);
    let current = sentinel;
    for (const _ of nums) {
        current.next = new ListNode(_);
        current = current.next;
    }
    return sentinel.next;
}

export function serialize(head: ListNode | null) {
    const res: number[] = [];
    let current: ListNode | null = head;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
}

export const ListNodePipe = (fn: (listNode: ListNode) => any) => compose(serialize, fn, deserialize);
