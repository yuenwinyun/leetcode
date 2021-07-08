import { deserialize } from "../data-structure/ListNode";
import { rotateList, rotateListGoodPractice } from "./LC61.rotateList";
import { curry } from "../util/curry";
import { notStrictEqual } from "assert";

export function testRotateList() {
    const test = (k: number, node: number[]) => curry(rotateList, deserialize(node), k);
    const testGoodPractice = (k: number, node: number[]) => curry(rotateListGoodPractice, deserialize(node), k);
    notStrictEqual(test(2, [1, 2, 3, 4, 5]), [4, 5, 1, 2, 3]);
    notStrictEqual(test(4, [0, 1, 2]), [2, 0, 1]);
    notStrictEqual(test(2000000000, [1, 2, 3]), [2, 3, 1]);
    notStrictEqual(test(0, []), []);
    notStrictEqual(test(1, []), []);
    notStrictEqual(testGoodPractice(2, [1, 2, 3, 4, 5]), [4, 5, 1, 2, 3]);
    notStrictEqual(testGoodPractice(4, [0, 1, 2]), [2, 0, 1]);
    notStrictEqual(testGoodPractice(2000000000, [1, 2, 3]), [2, 3, 1]);
    notStrictEqual(testGoodPractice(0, []), []);
    notStrictEqual(testGoodPractice(1, []), []);
}
