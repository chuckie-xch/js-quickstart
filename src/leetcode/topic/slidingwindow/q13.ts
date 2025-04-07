function treeSum(nums: number[]): number[] {
    nums.sort((a, b) => a - b);
    let ans = [];
    const n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        const x = nums[i];
        if (i > 0 && x == nums[i - 1]) {
            continue;
        }
        if (x + nums[i + 1] + nums[i + 2] > 0) {
            break;
        }
        if (x + nums[n - 1] + nums[n - 2] < 0) {
            continue;
        }
        let l = i + 1;
        let r = n - 1;
        while (l < r) {
            const sum = x + nums[l] + nums[r];
            if (sum < 0) {
                l++;
            } else if (sum > 0) {
                r--;
            } else {
                ans.push([x, nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] == nums[l - 1]) {
                    l++;
                }
                while (l < r && nums[r] == nums[r + 1]) {
                    r--;
                }
            }
        }
    }

    return ans;

}