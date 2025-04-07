function search(nums: number[], target: number): number {
    const i = lowerBound(nums, target);
    return i < nums.length && nums[i] == target ? i : -1;
}

function lowerBound(nums: number[], target: number): number {
    const n = nums.length;
    let l = 0, r = n - 1;
    while (l <= r) {
        let mid = l + ((r - l) >> 1);
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l;
}