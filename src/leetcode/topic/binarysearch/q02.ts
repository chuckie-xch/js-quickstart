function findClosestElements(arr: number[], k: number, x: number): number[] {
    const n = arr.length;
    let l = 0, r = n - 1;
    while (l <= r && r - l + 1 > k) {
        const lAbs = Math.abs(arr[l] - x);
        const rAbs = Math.abs(arr[r] - x);
        if (lAbs <= rAbs) {
            r--;
        } else {
            l++;
        }
    }
    return arr.slice(l, r + 1);
}