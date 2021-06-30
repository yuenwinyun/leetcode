import { composeListNode } from "../data-structure/ListNode";
import { rotateList, rotateListGoodPractice } from "./LC61.rotateList";
import { notStrictEqual } from "assert";

export function testRotateList() {
    // TODO: add curry on util
    const test = (k: number) => composeListNode(node => rotateList(node, k));
    const testGoodPractice = (k: number) => composeListNode(node => rotateListGoodPractice(node, k));
    notStrictEqual(test(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3]);
    notStrictEqual(test(4)([0, 1, 2]), [2, 0, 1]);
    notStrictEqual(test(2000000000)([1, 2, 3]), [2, 3, 1]);
    notStrictEqual(test(0)([]), []);
    notStrictEqual(test(1)([]), []);
    notStrictEqual(testGoodPractice(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3]);
    notStrictEqual(testGoodPractice(4)([0, 1, 2]), [2, 0, 1]);
    notStrictEqual(testGoodPractice(2000000000)([1, 2, 3]), [2, 3, 1]);
    notStrictEqual(testGoodPractice(0)([]), []);
    notStrictEqual(testGoodPractice(1)([]), []);
}
