function maxAbsolution(nums: number[]): number {
    let s = 0, mx = 0, mn = 0;
    for (let x of nums) {
        s += x;
        mx = Math.max(mx, s);
        mn = Math.min(mn, s);
    }
    return mx - mn;
}