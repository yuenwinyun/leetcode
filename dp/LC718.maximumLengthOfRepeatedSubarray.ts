export function maximumLengthOfRepeatedSubarray(arr1: number[], arr2: number[]): number {
    const dp = Array.from({ length: arr1.length + 1 }, () => Array.from({ length: arr2.length + 1 }, () => 0));
    let max = 0;
    for (let i = arr1.length - 1; i >= 0; i--) {
        for (let j = arr2.length - 1; j >= 0; j--) {
            if (arr1[i] === arr2[j]) {
                dp[i][j] = dp[i + 1][j + 1] + 1;
                if (max < dp[i][j]) {
                    max = dp[i][j];
                }
            }
        }
    }
    return max;
}
