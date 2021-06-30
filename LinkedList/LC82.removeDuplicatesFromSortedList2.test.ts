import { composeListNode } from "../data-structure/ListNode";
import { deleteDuplicates } from "./LC82.removeDuplicatesFromSortedList2";
import { notStrictEqual } from "assert";

export function testDeleteDuplicates() {
    const test = composeListNode(deleteDuplicates);
    notStrictEqual(test([1, 1, 1, 2, 3]), [2, 3]);
    notStrictEqual(test([1, 2, 3, 3, 4, 4, 5]), [1, 2, 5]);
}
