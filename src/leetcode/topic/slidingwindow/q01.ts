function maxVowels(s: string, k: number): number {
    const n = s.length;
    let ans = 0;
    let vowel = 0;
    let l = 0, r = 0;
    const flag = Array(n).fill(false);

    while (r < n) {
        while (r - l + 1 <= k) {
            const c = s[r];
            if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
                flag[r] = true;
                vowel++;
            }
            r++;
        }
        ans = Math.max(ans, vowel);
        vowel -= flag[l] ? 1 : 0;
        l++;
    }

    return ans;
}

function solution(s: string, k: number): number {
    const n = s.length;
    let ans = 0, vowel = 0;
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < n; i++) {
        const c = s[i];
        if (vowelSet.has(c)) {
            vowel++;
        }
        if (i + 1 < k) {
            continue;
        }
        ans = Math.max(ans, vowel);
        const out = s[i - k + 1];
        if (vowelSet.has(out)) {
            vowel--;
        }
    }
    return ans;
}