function palindromePartition(s: string, k: number): number {
    const n = s.length;
    const memoChange = Array.from({length: n}, () => Array(n).fill(-1));
    const memoDfs = Array.from({length: n}, () => Array(n).fill(-1));
    return dfs(s, k - 1, n - 1, memoDfs, memoChange);
}

function dfs(s: string, i: number, r: number, memoDfs: number[][], memoChange: number[][]): number {
    if (memoDfs[i][r] != -1) {
        return memoDfs[i][r];
    }
    if (i == 0) {
        return minChange(0, r, s, memoChange);
    }
    let res = Number.MAX_VALUE;
    for (let j = i; j <= r; j++) {
        res = Math.min(res, minChange(j, r, s, memoChange) + dfs(s, i - 1, j - 1, memoDfs, memoChange));
    }
    memoDfs[i][r] = res;
    return res;
}

function minChange(i: number, j: number, s: string, memoChange: number[][]): number {
    if (memoChange[i][j] != -1) {
        return memoChange[i][j];
    }
    if (i >= j) {
        return 0;
    }
    let res = minChange(i + 1, j - 1, s, memoChange);
    if (s.charAt(i) !== s.charAt(j)) {
        res++;
    }
    memoChange[i][j] = res;
    return res;
}