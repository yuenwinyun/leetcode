import { compose } from "../util/compose";

export class ListNode<T = number> {
    constructor(public val: T, public next: ListNode<T> | null = null) {}
}

export function deserialize(nums: number[]) {
    const sentinel = new ListNode(null as unknown as number);
    let current: ListNode | null = sentinel;
    for (const num of nums) {
        current.next = new ListNode(num);
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

export const ListNodePipe = <T = number>(pipe: (listNode: ListNode<T> | null) => ListNode<T> | null) => {
    return compose(serialize, pipe, deserialize);
};
