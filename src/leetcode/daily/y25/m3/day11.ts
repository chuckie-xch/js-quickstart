function sumOfBeauties(nums: number[]): number {
    const n = nums.length;
    const sufMin = Array(n);
    sufMin[n - 1] = nums[n - 1];
    for (let i = n - 2; i > 1; i--) {
        sufMin[i] = Math.min(nums[i], sufMin[i + 1]);
    }

    let ans = 0;
    let preMax = nums[0];
    for (let i = 1; i < n - 1; i++) {
        if (nums[i] > preMax && nums[i] < sufMin[i + 1]) {
            ans += 2;
        } else if (nums[i] > nums[i - 1] && nums[i] < nums[i + 1]) {
            ans += 1;
        }
        preMax = Math.max(preMax, nums[i]);
    }

    return ans;
}