function minOperations1(nums: number[], k: number): number {
    const set = new Set();
    for (let x of nums) {
        if (x < k) {
            return -1;
        }
        if (x > k) {
            set.add(x);
        }
    }
    return set.size;
}