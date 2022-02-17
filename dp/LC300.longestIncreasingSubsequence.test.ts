import { dp } from './LC300.longestIncreasingSubsequence'

test("[LIS] DP", () => {
    expect(dp([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    expect(dp([0, 1, 0, 3, 2, 3])).toBe(4);
    expect(dp([7, 7, 7, 7, 7, 7, 7])).toBe(1);
    expect(dp([3, 2, 1])).toBe(1);
});
