import { longestCommonSubsequence } from "./LC1143.longestCommonSubsequence";

test("LC1143.longestCommonSubsequence", () => {
    expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
    expect(longestCommonSubsequence("bsbininm", "jmjkbkjkv")).toBe(1);
});
