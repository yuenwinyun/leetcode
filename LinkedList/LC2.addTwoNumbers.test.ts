import { composeListNode } from '../data-structure/ListNode'
import { addTwoNumbers } from './LC2.addTwoNumbers'

test.skip("add two list numbers", () => {
    const addTwoListNumbers = composeListNode(addTwoNumbers);
    expect(addTwoListNumbers([1, 2, 3], [3, 2, 1])).toEqual([4, 4, 4]);
    expect(addTwoListNumbers([1, 1, 1], [0, 0, 0])).toEqual([1, 1, 1]);
    expect(addTwoListNumbers([0, 0, 0], [0, 0, 0])).toEqual([0, 0, 0]);
    expect(addTwoListNumbers([5, 6, 7], [5, 6, 7])).toEqual([0, 3, 2, 4]);
});
