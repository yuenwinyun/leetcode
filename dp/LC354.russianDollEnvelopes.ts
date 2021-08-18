export function russianDollEnvelopes(envelopes: number[][]): number {
    if (envelopes.length === 0 || envelopes[0].length !== 2) {
        return 0;
    }

    envelopes.sort((arr1, arr2) => {
        if (arr1[0] === arr2[0]) {
            return arr2[1] - arr1[1];
        } else {
            return arr1[0] - arr2[1];
        }
    });

    const dp = Array.from(envelopes, () => 1);
    let res = 0;

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[j][1] < envelopes[i][1] && envelopes[j][0] < envelopes[i][0]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }

        res = Math.max(res, dp[i]);
    }
    return res;
}
