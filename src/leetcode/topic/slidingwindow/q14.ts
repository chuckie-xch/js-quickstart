function trap(height: number[]): number {
    let ans = 0;
    const n = height.length;
    if (n < 3) {
        return 0;
    }
    let lMax = height[0];
    let rMax = height[n - 1];
    let l = 1, r = n - 2;
    while (l <= r) {
        if (lMax < rMax) {
            ans += Math.max(0, lMax - height[l]);
            lMax = Math.max(lMax, height[l]);
            l++;
        } else {
            ans += Math.max(0, rMax - height[r]);
            rMax = Math.max(rMax, height[r]);
            r--;
        }
    }
    return ans;
}