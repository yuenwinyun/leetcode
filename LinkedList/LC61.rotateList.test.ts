import { listNodePipe, ListNode } from "./ListNode";
import { rotateList, goodPractice } from "./LC61.rotateList";

interface TestProps {
    head: number[];
    k: number;
    result: number[];
}

test.each`
    head               | k             | result
    ${[1, 2, 3, 4, 5]} | ${2}          | ${[4, 5, 1, 2, 3]}
    ${[0, 1, 2]}       | ${4}          | ${[2, 0, 1]}
    ${[1, 2, 3]}       | ${2000000000} | ${[2, 3, 1]}
    ${[]}              | ${0}          | ${[]}
    ${[]}              | ${1}          | ${[]}
`("", ({ head, k, result }: TestProps) => {
    const actualResult = listNodePipe((listNodes: ListNode) => rotateList(listNodes, k))(head);
    const goodPracticeResult = listNodePipe((listNodes: ListNode) => goodPractice(listNodes, k))(head);
    expect(actualResult).toEqual(result);
    expect(goodPracticeResult).toEqual(result);
});
