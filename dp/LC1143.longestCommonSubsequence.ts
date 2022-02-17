import { create2DArray } from "../util/array";

export function longestCommonSubsequence(text1: string, text2: string): number {
    const N = text1.length;
    const M = text2.length;
    const lcs = create2DArray(N + 1, M + 1, () => 0);

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            // STE
            if (text1[i - 1] === text2[j - 1]) {
                lcs[i][j] = lcs[i - 1][j - 1] + 1;
            } else {
                lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
            }
        }
    }
    return lcs[N][M];
}
