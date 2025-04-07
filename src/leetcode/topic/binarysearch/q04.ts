function maximumTastiness(price: number[], k: number): number {
    price.sort((a, b) => a - b);
    const n = price.length;
    let l = 0, r = Math.floor((price[n - 1] - price[0]) / (k - 1));
    while (l <= r) {
        const mid = l + ((r - l) >> 1);
        if (f(price, mid) >= k) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l - 1;
}

function f(price: number[], d: number) {
    let pre = price[0];
    let cnt = 1;
    for (const p of price) {
        if (p >= pre + d) {
            pre = p;
            cnt++;
        }
    }
    return cnt;
}