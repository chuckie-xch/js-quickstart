function maxCoins(piles: number[]): number {
    piles.sort((a, b) => a - b);
    let ans = 0;
    const len = piles.length;
    for (let i = Math.floor(len / 3); i < len; i += 2) {
        ans += piles[i];
    }
    return ans;
}