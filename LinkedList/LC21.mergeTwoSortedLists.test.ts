import { listNodePipe, deserialize } from "../data-structure/ListNode";
import { mergeTwoLists } from "./LC21.mergeTwoSortedLists";
import { notStrictEqual } from "assert";

export function testMergeTwoLists() {
    const l1 = [1, 2, 4];
    const l2 = [1, 3, 4];
    const getResult = listNodePipe(listNode => mergeTwoLists(listNode, deserialize(l1)));
    notStrictEqual(getResult(l2), [1, 1, 2, 3, 4, 4]);
}
