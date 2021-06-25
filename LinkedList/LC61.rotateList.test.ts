import { ListNodePipe } from "../data-structure/ListNode";
import { rotateList, goodPractice } from "./LC61.rotateList";

interface TestProps {
    head: number[];
    k: number;
    result: number[];
}

// test.each`
//     head               | k             | result
//     ${[1, 2, 3, 4, 5]} | ${2}          | ${[4, 5, 1, 2, 3]}
//     ${[0, 1, 2]}       | ${4}          | ${[2, 0, 1]}
//     ${[1, 2, 3]}       | ${2000000000} | ${[2, 3, 1]}
//     ${[]}              | ${0}          | ${[]}
//     ${[]}              | ${1}          | ${[]}
// `("test rotateList", ({ head, k, result }: TestProps) => {
//     const getRotateListResult = ListNodePipe(listNode => rotateList(listNode, k));
//     const getGoodPracticeResult = ListNodePipe(listNode => goodPractice(listNode, k));
//     expect(getRotateListResult(head)).toEqual(result);
//     expect(getGoodPracticeResult(head)).toEqual(result);
// });
