import { deserializeListNode, serializeListNode } from "./ListNode";
import { rotateList } from "./LC61.rotateList";

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
    const listNodes = deserializeListNode(head);
    const actualResult = serializeListNode(rotateList(listNodes, k));
    expect(actualResult).toEqual(result);
});
