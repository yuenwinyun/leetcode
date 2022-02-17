import { longestCommonSubsequence } from "./LC1143.longestCommonSubsequence";

test("longest common subsequence", () => {
    expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
    expect(longestCommonSubsequence("bsbinim", "jmjkbkjkv")).toBe(1);
});
