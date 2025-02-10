function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const memo = Array.from({length: m}, () => Array(n).fill(-1));
    const dfs = function (i: number, j: number): number {
        if (i < 0 || j < 0 || obstacleGrid[i][j] == 1) {
            return 0;
        }
        if (i == 0 && j == 0) {
            return 1;
        }
        if (memo[i][j] != -1) {
            return memo[i][j];
        }
        memo[i][j] = dfs(i - 1, j) + dfs(i, j - 1);
        return memo[i][j];
    };
    return dfs(m - 1, n - 1);
}