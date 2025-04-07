function maxDistance(arrays: number[][]): number {
    let ans = 0;
    let preMax = -Infinity;
    let preMin = Infinity;
    for (const item of arrays) {
        ans = Math.max(ans, preMax - item[0], item[item.length - 1] - preMin);
        preMin = Math.min(preMin, item[0]);
        preMax = Math.min(preMax, item[item.length - 1]);
    }
    return ans;
}