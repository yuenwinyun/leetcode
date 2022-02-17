export function dp(ns: number[]): number {
    const dp = Array.from(ns, () => 1);
    for (let i = 0; i < ns.length; i++) {
        for (let j = 0; j < i; j++) {
            if (ns[i] > ns[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }
    return Math.max(0, ...dp);
}
