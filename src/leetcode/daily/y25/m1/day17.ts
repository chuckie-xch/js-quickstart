function minimumSubarrayLength(nums: number[], k: number): number {
    const len = nums.length;
    let ans = Number.MAX_VALUE;
    let l = 0, r = -1;
    const bit: number[] = new Array(32).fill(0);
    while (r < len) {
        while (check(bit, k) && l <= r) {
            ans = Math.min(ans, r - l + 1);
            for (let i = 0; i <= 30; i++) {
                bit[i] -= ((nums[l] >> i) & 1);
            }
            l++;
        }
        r++;
        if (r == len) {
            break;
        }
        for (let i = 0; i <= 30; i++) {
            bit[i] += (nums[r] >> i) & 1;
        }
    }
    return ans === Number.MAX_VALUE ? -1 : ans;
}

function check(bit: number[], k: number): boolean {
    for (let i = 30; i >= 0; i--) {
        if (bit[i] > 0 && ((k >> i) & 1) == 0) {
            return true;
        }
        if (bit[i] == 0 && ((k >> i) & 1) == 1) {
            return false;
        }
    }
    return true;
}