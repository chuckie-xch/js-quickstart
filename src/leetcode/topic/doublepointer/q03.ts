function smallestDifference(a: number[], b: number[]): number {
    const m = a.length;
    const n = b.length;
    if (m == 1 && n == 1) {
        return Math.abs(a[0] - b[0]);
    }

    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);

    let i = 0, j = 0, ans = Number.MAX_VALUE;
    while (i < m && j < n) {
        if (a[i] == b[j]) {
            return 0;
        }
        ans = Math.min(ans, Math.abs(a[i] - b[j]));
        if (a[i] < b[j]) {
            i++;
        } else {
            j++;
        }
    }
    return ans;

};