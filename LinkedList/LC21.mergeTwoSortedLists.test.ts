import { ListNodePipe, deserialize } from "../data-structure/ListNode";
import { mergeTwoLists } from "./LC21.mergeTwoSortedLists";
import { strict as assert } from "assert";

export function testMergeTwoLists() {
    const l1 = [1, 2, 4];
    const l2 = [1, 3, 4];
    const getResult = ListNodePipe(listNode => mergeTwoLists(listNode, deserialize(l1)));
    assert.equal(getResult(l2), [1, 1, 2, 3, 4, 4]);
}
