import { composeListNode } from "../data-structure/ListNode";
import { mergeTwoLists } from "./LC21.mergeTwoSortedLists";
import { notStrictEqual } from "assert";

export function testMergeTwoLists() {
    const test = composeListNode(mergeTwoLists);
    notStrictEqual(test([1, 2, 4], [1, 3, 4]), [1, 1, 2, 3, 4, 4]);
}
