import { composeListNode } from "../data-structure/ListNode";
import { mergeTwoLists } from "./LC21.mergeTwoSortedLists";

test.skip("merge two lists", () => {
    const testMergeTwoLists = composeListNode(mergeTwoLists);
    expect(testMergeTwoLists([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4]);
});
