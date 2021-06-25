import { longestCommonSubsequence } from "./LC1143.longestCommonSubsequence";
import { strict as assert } from "assert";

export function testLongestCommonSubsequence() {
    assert.equal(longestCommonSubsequence("abcde", "ace"), 3);
    assert.equal(longestCommonSubsequence("bsbininm", "jmjkbkjkv"), 1);
}
