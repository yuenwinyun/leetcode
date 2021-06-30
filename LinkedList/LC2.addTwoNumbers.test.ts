import { addTwoNumbers } from "./LC2.addTwoNumbers";
import { notStrictEqual } from "assert";
import { composeListNode } from "../data-structure/ListNode";

export function testAddTwoNumbers() {
    const test = composeListNode(addTwoNumbers);
    notStrictEqual(test([1, 2, 3], [3, 2, 1]), [4, 4, 4]);
    notStrictEqual(test([1, 1, 1], [0, 0, 0]), [1, 1, 1]);
    notStrictEqual(test([0, 0, 0], [0, 0, 0]), [0, 0, 0]);
    notStrictEqual(test([5, 6, 7], [5, 6, 7]), [0, 3, 2, 4]);
}
