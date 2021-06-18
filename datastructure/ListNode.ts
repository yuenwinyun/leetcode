import compose from "util/compose";

export class ListNode<T = number> {
    constructor(public val: T, public next: ListNode<T> | null = null) {}
}

export function deserialize(nums: number[]) {
    const sentinel = new ListNode(0);
    let current: ListNode | null = sentinel;
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

export const ListNodePipe = (fn: (listNodes: ListNode | null) => ListNode | null) => {
    return compose(serialize, fn, deserialize);
};
