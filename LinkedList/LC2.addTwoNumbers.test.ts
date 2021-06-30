import { addTwoNumbers } from "./LC2.addTwoNumbers";
import { notStrictEqual } from "assert";
import { listNodePipe, deserialize } from "../data-structure/ListNode";

export function testAddTwoNumbers() {
    const l1 = [1, 2, 3];
    const l2 = [3, 2, 1];
    const pipe = listNodePipe(listNode => addTwoNumbers(listNode, deserialize(l1)));
    notStrictEqual(pipe(l2), [4, 4, 4]);
}
