function maximumCount(nums: number[]): number {
    const n = nums.length;
    const lowerBound = lowerBoundIndex(nums, n);
    const higherBound = higherBoundIndex(nums, n);
    return Math.max(n - lowerBound, higherBound + 1);
}

function lowerBoundIndex(nums: number[], n: number): number {
    let l = 0, r = n - 1;
    while (l <= r) {
        let mid = l + ((r - l) >> 1);
        if (nums[mid] <= 0) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l;
}

function higherBoundIndex(nums: number[], n: number): number {
    let l = 0, r = n - 1;
    while (l <= r) {
        let mid = l + ((r - l) >> 1);
        if (nums[mid] >= 0) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return r;
}