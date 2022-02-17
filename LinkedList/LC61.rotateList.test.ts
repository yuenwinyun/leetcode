import { deserialize } from "../data-structure/ListNode";
import { curry } from "../util/curry";
import { rotateList, rotateListGoodPractice } from "./LC61.rotateList";

test.skip("[Poor Practice] rotate list", () => {
    const curriedRotateList = (k: number, node: number[]) => curry(rotateList, deserialize(node), k);
    expect(curriedRotateList(2, [1, 2, 3, 4, 5])).toEqual([4, 5, 1, 2, 3]);
    expect(curriedRotateList(4, [0, 1, 2])).toEqual([2, 0, 1]);
    expect(curriedRotateList(2000000000, [1, 2, 3])).toEqual([2, 3, 1]);
    expect(curriedRotateList(0, [])).toEqual([]);
    expect(curriedRotateList(1, [])).toEqual([]);
});

test.skip("[Good Practice] rotate list", () => {
    const curriedRotateList = (k: number, node: number[]) => curry(rotateListGoodPractice, deserialize(node), k);
    expect(curriedRotateList(2, [1, 2, 3, 4, 5])).toEqual([4, 5, 1, 2, 3]);
    expect(curriedRotateList(4, [0, 1, 2])).toEqual([2, 0, 1]);
    expect(curriedRotateList(2000000000, [1, 2, 3])).toEqual([2, 3, 1]);
    expect(curriedRotateList(0, [])).toEqual([]);
    expect(curriedRotateList(1, [])).toEqual([]);
});
