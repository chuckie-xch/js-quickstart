function minOperations(nums: number[], x: number): number {
    let target = -x;
    for (let i = 0; i < nums.length; i++) {
        target += nums[i];
    }
    if (target < 0) {
        return -1;
    }
    let l = 0, ans = -1, s = 0;
    for (let r = 0; r < nums.length; r++) {
        const cur = nums[r];
        s += cur;
        while (s > target) {
            s -= nums[l];
            l++;
        }
        if (s === target) {
            ans = Math.max(ans, r - l + 1);
        }
    }
    return ans === -1 ? ans : nums.length - ans;
}