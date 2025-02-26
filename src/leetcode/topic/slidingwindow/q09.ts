function maximumLengthSubstring(s: string): number {
    let ans = 0, l = 0;
    const cnt = Array(128).fill(0);
    for (let r = 0; r < s.length; r++) {
        const curCode = s.charCodeAt(r);
        cnt[curCode]++;
        while (cnt[curCode] > 2) {
            cnt[s.charCodeAt(l)]--;
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
}