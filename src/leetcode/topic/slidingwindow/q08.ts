function lengthOfLongestSubstring(s: string): number {
    const n = s.length;
    let ans = 0;
    if (n < 2) {
        return n;
    }
    let l = 0, r = 1;
    const cnt = Array(128).fill(0);
    cnt[s.charCodeAt(l)]++;
    while (r < n) {
        const cur = s.charCodeAt(r);
        cnt[cur]++;
        while (cnt[cur] > 1) {
            cnt[s.charCodeAt(l)]--;
            l++;
        }
        ans = Math.max(ans, r - l + 1);
        r++;
    }
    return ans;
}