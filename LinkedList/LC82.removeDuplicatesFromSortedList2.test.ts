import { ListNodePipe } from "data-structure/ListNode";
import { deleteDuplicates } from "./LC82.removeDuplicatesFromSortedList2";

interface TestProps {
    head: number[];
    result: number[];
}

test.each`
    head                     | result
    ${[1, 1, 1, 2, 3]}       | ${[2, 3]}
    ${[1, 2, 3, 3, 4, 4, 5]} | ${[1, 2, 5]}
`("test deleteDuplicates", ({ head, result }: TestProps) => {
    expect(ListNodePipe(deleteDuplicates)(head)).toEqual(result);
});
