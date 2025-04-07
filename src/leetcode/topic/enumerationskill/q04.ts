function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let ans = 0;
    const cntMap = new Map();
    for (let a of nums1) {
        for (let b of nums2) {
            cntMap.set(a + b, (cntMap.get(a + b) ?? 0) + 1);
        }
    }
    for (let a of nums3) {
        for (let b of nums4) {
            ans += cntMap.get(-a - b) ?? 0;
        }
    }
    return ans;
};