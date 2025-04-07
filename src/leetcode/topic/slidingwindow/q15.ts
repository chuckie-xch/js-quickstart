function minWindow(s: string, t: string): string {
    if (s.length < t.length) {
        return "";
    }
    const map = Array(128).fill(0);
    for (let i = 0; i < t.length; i++) {
        map[t.charCodeAt(i)]++;
    }
    let need = t.length;
    let l = 0, r = 0, start = 0, end = 0;
    let minLength = Number.MAX_VALUE;
    const n = s.length;
    while (r < n) {
        map[s.charCodeAt(r)]--;
        if (map[s.charCodeAt(r)] >= 0) {
            need--;
        }
        if (need === 0) {
            while (map[s.charCodeAt(l)] < 0) {
                map[s.charCodeAt(l)]++;
                l++;
            }
            if (minLength > r - l + 1) {
                minLength = r - l + 1;
                start = l;
                end = r;
            }
            map[s.charCodeAt(l)]++;
            l++;
            need++;
        }
        r++;
    }
    return minLength == Number.MAX_VALUE ? "" : s.substring(start, end + 1);
}