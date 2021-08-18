export function longestIncreasingSubsequence(nums: number[]): number {
    const dp: number[] = Array.from(nums, () => 1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }

    return Math.max(0, ...dp);
}
