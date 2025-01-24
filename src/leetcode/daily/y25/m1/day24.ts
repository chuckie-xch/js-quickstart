function minimumCoins(prices: number[]): number {
    const n = prices.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + prices[i - 1];
        const start = Math.floor((i + 1) / 2);
        for (let j = start; j < i; j++) {
            dp[i] = Math.min(dp[i], dp[j - 1] + prices[j - 1]);
        }
    }
    return dp[n];
}