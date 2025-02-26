function maximumSubarraySum(nums: number[], k: number): number {
    const n = nums.length;
    let map = new Map();
    let sum = 0, ans = 0;
    for (let i = 0; i < n; i++) {
        const cur = nums[i];
        sum += cur;
        map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1);
        if (i + 1 < k) {
            continue;
        }
        if (map.size === k) {
            ans = Math.max(ans, sum);
        }
        const out = nums[i - k + 1];
        sum -= out;
        if (map.get(out) === 1) {
            map.delete(out);
        } else {
            map.set(out, map.get(out) - 1);
        }
    }
    return ans;
}