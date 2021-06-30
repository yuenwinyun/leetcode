import { addTwoNumbers } from "./LC2.addTwoNumbers";
import { notStrictEqual } from "assert";
import { composeListNode } from "../data-structure/ListNode";

export function testAddTwoNumbers() {
    const test = composeListNode(addTwoNumbers);
    notStrictEqual(test([1, 2, 3], [3, 2, 1]), [4, 4, 4]);
}
