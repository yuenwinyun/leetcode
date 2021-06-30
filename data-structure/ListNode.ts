import { compose } from "../util/compose";

export class ListNode<T = number> {
    constructor(public val: T, public next: ListNode<T> | null = null) {}
}

function deserialize(nums: number[]) {
    const sentinel = new ListNode(null as unknown as number);
    let current: ListNode | null = sentinel;
    for (const num of nums) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return sentinel.next;
}

function deserializeFromList(...nodes: number[][]) {
    return nodes.map(deserialize);
}

function serialize(head: ListNode | null) {
    const res: number[] = [];
    let current: ListNode | null = head;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
}

function serializeFromList(...nodes: ListNode[]) {
    return nodes.map(serialize);
}

export const composeListNode = <T = number>(pipe: (...nodes: (ListNode<T> | null)[]) => ListNode<T> | null) => {
    return compose(serializeFromList, pipe, deserializeFromList);
};
