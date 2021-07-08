import { compose } from "../util/compose";

export class ListNode<T = number> {
    constructor(public val: T, public next: ListNode<T> | null = null) {}
}

export function deserialize(numbers: number[]) {
    const sentinel = new ListNode(Number.MIN_SAFE_INTEGER);
    let current: ListNode | null = sentinel;
    for (const num of numbers) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return sentinel.next;
}

export function deserializeFromList(...listNodes: number[][]) {
    return listNodes.map(deserialize);
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

export function composeListNode(pipe: (...ListNodes: (ListNode | null)[]) => ListNode | null) {
    return compose(serialize, pipe, deserializeFromList);
}
