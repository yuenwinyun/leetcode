import { listNodePipe } from "datastructure/ListNode";
import { deleteDuplicates } from "./LC82.removeDuplicatesFromSortedList2";

interface TestProps {
    head: number[];
    result: number[];
}

test.each`
    head                     | result
    ${[1, 1, 1, 2, 3]}       | ${[2, 3]}
    ${[1, 2, 3, 3, 4, 4, 5]} | ${[1, 2, 5]}
`("", ({ head, result }: TestProps) => {
    expect(listNodePipe(deleteDuplicates)(head)).toEqual(result);
});
