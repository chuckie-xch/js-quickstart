function countSymmetricIntegers(low: number, high: number): number {
    let ans = 0;
    for (let i = low; i <= high; i++) {
        const s = i.toString();
        const n = s.length;
        if (n % 2 != 0) {
            continue;
        }
        let diff = 0;
        for (let j = 0; j < n / 2; j++) {
            diff += Number(s.charAt(j));
        }
        for (let j = n / 2; j < n; j++) {
            diff -= Number(s.charAt(j));
        }
        if (diff == 0) {
            ans++;
        }
    }
    return ans;
};