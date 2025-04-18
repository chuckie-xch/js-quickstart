function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const ans = Array(n).fill(0);
    const st = [];
    for (let i = n - 1; i >= 0; i--) {
        const x = temperatures[i];
        while (st.length && x >= temperatures[st[st.length - 1]]) {
            st.pop();
        }
        if (st.length) {
            ans[i] = st[st.length - 1] - i;
        }
        st.push(i);
    }
    return ans;
}

function dailyTemperatures2(temperatures: number[]): number[] {
    const n = temperatures.length;
    const ans = Array(n).fill(0);
    const st = [];
    for (let i = 0; i < n; i++) {
        const x = temperatures[i];
        while (st.length && x > temperatures[st[st.length - 1]]) {
            let j = st.pop();
            ans[j] = i - j;
        }
        st.push(i);
    }
    return ans;
}