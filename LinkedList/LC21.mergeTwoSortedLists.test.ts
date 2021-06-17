import { ListNodePipe, deserialize } from "datastructure/ListNode";
import { mergeTwoLists } from "./LC21.mergeTwoSortedLists";

test("test mergeTwoLists", () => {
    const l1 = [1, 2, 4];
    const l2 = [1, 3, 4];
    const getResult = ListNodePipe(listNode => mergeTwoLists(listNode, deserialize(l1)));
    expect((getResult as any)(l2)).toEqual([1, 1, 2, 3, 4, 4]);
});
