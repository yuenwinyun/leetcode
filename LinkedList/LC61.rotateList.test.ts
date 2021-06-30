import { listNodePipe } from "../data-structure/ListNode";
import { rotateList, goodPractice } from "./LC61.rotateList";
import { notStrictEqual } from "assert";

export function testRotateList() {
    const pipe = (head: number[], k: number) => listNodePipe(listNode => rotateList(listNode, k))(head);
    const goodPipe = (head: number[], k: number) => listNodePipe(listNode => goodPractice(listNode, k))(head);
    notStrictEqual(pipe([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3]);
    notStrictEqual(pipe([0, 1, 2], 4), [2, 0, 1]);
    notStrictEqual(pipe([1, 2, 3], 2000000000), [2, 3, 1]);
    notStrictEqual(pipe([], 0), []);
    notStrictEqual(pipe([], 1), []);
    notStrictEqual(goodPipe([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3]);
    notStrictEqual(goodPipe([0, 1, 2], 4), [2, 0, 1]);
    notStrictEqual(goodPipe([1, 2, 3], 2000000000), [2, 3, 1]);
    notStrictEqual(goodPipe([], 0), []);
    notStrictEqual(goodPipe([], 1), []);
}
