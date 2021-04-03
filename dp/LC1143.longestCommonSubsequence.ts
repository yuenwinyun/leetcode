export function longestCommonSubsequence(text1: string, text2: string): number {
    const N = text1.length;
    const M = text2.length;
    const dp: number[][] = Array.from({ length: N + 1 }, () => Array.from({ length: M + 1 }, () => 0));
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            // STE
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[N][M];
}

function TLE_longestCommonSubsequence(text1: string, text2: string): number {
    if (text1.length === 0 || text2.length === 0) return 0;
    const N = text1.length;
    const M = text2.length;
    if (text1[N - 1] === text2[M - 1]) {
        return 1 + TLE_longestCommonSubsequence(text1.slice(0, N - 1), text2.slice(0, M - 1));
    } else {
        return Math.max(
            TLE_longestCommonSubsequence(text1.slice(0, N - 1), text2.slice(0, M)),
            TLE_longestCommonSubsequence(text1.slice(0, N), text2.slice(0, M - 1))
        );
    }
}
