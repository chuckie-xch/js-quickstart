function maxScoreSightseeingPair(values: number[]): number {
    const n = values.length;
    let maxLeft = values[0];
    let ans = 0;
    for (let i = 1; i < n; i++) {
        ans = Math.max(ans, values[i] - i + maxLeft);
        maxLeft = Math.max(maxLeft, values[i] + i);
    }
    return ans;
}