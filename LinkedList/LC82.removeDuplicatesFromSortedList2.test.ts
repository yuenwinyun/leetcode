import { listNodePipe } from "../data-structure/ListNode";
import { deleteDuplicates } from "./LC82.removeDuplicatesFromSortedList2";
import { notStrictEqual } from "assert";

export function testDeleteDuplicates() {
    const pipe = listNodePipe(deleteDuplicates);
    notStrictEqual(pipe([1, 1, 1, 2, 3]), [2, 3]);
    notStrictEqual(pipe([1, 2, 3, 3, 4, 4, 5]), [1, 2, 5]);
}
