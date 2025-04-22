function minCostClimbingStairs(cost: number[]): number {
    let f0 = 0, f1 = 0;
    const n = cost.length;
    for (let i = 2; i <= n; i++) {
        const newF = Math.min(f1 + cost[i - 1], f0 + cost[i - 2]);
        f0 = f1;
        f1 = newF;
    }
    return f1;
};