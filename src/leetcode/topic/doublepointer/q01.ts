function triangleNumber(nums: number[]): number {
    const n = nums.length;
    if (n < 3) {
        return 0;
    }

    nums.sort((a, b) => a - b);
    let ans = 0;

    for (let i = n - 1; i >= 2; i--) {
        const k = nums[i];
        let l = 0, r = i - 1;

        while (l < r) {
            const sum = nums[l] + nums[r];
            if (sum <= k) {
                l++;
            } else {
                ans += r - l;
                r--;
            }
        }
    }

    return ans;
}