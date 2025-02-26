function getAverages(nums: number[], k: number): number[] {
    const len = nums.length;
    if (k === 0) {
        return nums;
    }
    let ans = Array(len).fill(-1);
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += nums[i];
        if (i < 2 * k) {
            continue;
        }
        ans[i - k] = Math.floor(sum / (2 * k + 1));
        sum -= nums[i - 2 * k];
    }
    return ans;
}