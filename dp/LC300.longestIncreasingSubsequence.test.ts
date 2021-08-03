import { longestIncreasingSubsequence } from "./LC300.longestIncreasingSubsequence";
import { strict as assert } from "assert";

export function testLongestIncreasingSubsequence() {
    assert.equal(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]), 4);
    assert.equal(longestIncreasingSubsequence([0, 1, 0, 3, 2, 3]), 4);
    assert.equal(longestIncreasingSubsequence([7, 7, 7, 7, 7, 7, 7]), 1);
}
