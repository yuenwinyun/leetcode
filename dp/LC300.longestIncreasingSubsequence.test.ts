import { longestIncreasingSubsequence } from "./LC300.longestIncreasingSubsequence";

test("longest increasing subsequence", () => {
    expect(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    expect(longestIncreasingSubsequence([0, 1, 0, 3, 2, 3])).toBe(4);
    expect(longestIncreasingSubsequence([7, 7, 7, 7, 7, 7, 7])).toBe(1);
});
