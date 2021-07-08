import { maximumLengthOfRepeatedSubarray } from "./LC718.maximumLengthOfRepeatedSubarray";
import { strict as assert } from "assert";

export function testMaximumLengthOfRepeatedSubarray() {
    assert.equal(maximumLengthOfRepeatedSubarray([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]), 3);
    assert.equal(maximumLengthOfRepeatedSubarray([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]), 5);
}
