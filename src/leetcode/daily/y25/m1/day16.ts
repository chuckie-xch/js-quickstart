function minimumSubarrayLength(nums: number[], k: number): number {
    const n = nums.length;
    let res = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        let value = 0;
        for (let j = i; j < n; j++) {
            value = value | nums[j];
            if (value >= k) {
                res = Math.min(res, j - i + 1);
                break;
            }
        }
    }
    return res === Number.MAX_VALUE ? -1 : res;
}