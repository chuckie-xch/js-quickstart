function generateMatrix(n: number): number[][] {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const ans = Array.from({length: n}, () => Array(n).fill(0));
    let di = 0;
    let i = 0;
    let j = 0;
    for (let val = 1; val <= n * n; val++) {
        ans[i][j] = val;
        const x = i + dirs[di][0];
        const y = j + dirs[di][1];
        if (x < 0 || x >= n || y < 0 || y >= n || ans[x][y] != 0) {
            di = (di + 1) % 4;
        }
        i += dirs[di][0];
        j += dirs[di][1];
    }
    return ans;
}