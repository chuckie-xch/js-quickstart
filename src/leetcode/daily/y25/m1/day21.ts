function maxValueOfCoins(piles: number[][], k: number): number {
    const len = piles.length;
    const memo = Array.from({length: len}, () => Array(k + 1).fill(0));
    return dfs(len - 1, k, piles, memo);
}

function dfs(i: number, j: number, piles: number[][], memo: number[][]) {
    if (i < 0) {
        return 0;
    }
    if (memo[i][j] != 0) {
        return memo[i][j];
    }
    let ans = dfs(i - 1, j, piles, memo);
    let totalValue = 0;
    for (let w = 0; w < Math.min(j, piles[i].length); w++) {
        totalValue += piles[i][w];
        ans = Math.max(ans, dfs(i - 1, j - w - 1, piles, memo) + totalValue);
    }
    memo[i][j] = ans;
    return ans;
}