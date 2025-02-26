function maxScore(cardPoints: number[], k: number): number {
    let s = 0;
    const n = cardPoints.length;
    for (let i = 0; i < k; i++) {
        s += cardPoints[i];
    }
    let ans = s;

    for (let i = 1; i <= k; i++) {
        s += cardPoints[n - i] - cardPoints[k - i];
        ans = Math.max(ans, s);
    }

    return ans;
}