function maxSubArray(nums: number[]): number {
    let s = 0, mn = 0, ans = -Infinity;
    for (let x of nums) {
        s += x;
        ans = Math.max(ans, s - mn);
        mn = Math.min(mn, s);
    }
    return ans;
}