function minimumRefill(plants: number[], capacityA: number, capacityB: number) {
    let totalA = capacityA, totalB = capacityB, ans = 0, l = 0, r = plants.length - 1;
    while (l < r) {
        if (totalA < plants[l]) {
            totalA = capacityA;
            ans++;
        }
        if (totalB < plants[r]) {
            totalB = capacityB
            ans++;
        }
        totalA -= plants[l];
        totalB -= plants[r];
        l++;
        r--;
    }

    if (l == r && Math.max(totalA, totalB) < plants[l]) {
        ans++;
    }

    return ans;
}