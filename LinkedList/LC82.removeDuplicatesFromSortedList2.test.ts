import { composeListNode } from '../data-structure/ListNode'
import { deleteDuplicates } from './LC82.removeDuplicatesFromSortedList2'

test("delete duplicate", () => {
    const composedDeleteDuplicate = composeListNode(deleteDuplicates);
    expect(composedDeleteDuplicate([1, 1, 1, 2, 3])).toEqual([2, 3]);
    expect(composedDeleteDuplicate([1, 2, 3, 3, 4, 4, 5])).toEqual([1, 2, 5]);
});
