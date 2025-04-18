function finalPrices(prices: number[]): number[] {
    const n = prices.length;
    const ans = Array(n);
    const st = [];
    for (let i = 0; i < n; i++) {
        const x = prices[i];
        while (st.length && x <= prices[st[st.length - 1]]) {
            const j = st.pop();
            ans[j] = prices[j] - x;
        }
        st.push(i);
    }
    while (st.length) {
        const i = st.pop();
        ans[i] = prices[i];
    }
    return ans;
};

function finalPrices2(prices: number[]): number[] {
    const n = prices.length;
    const ans = Array(n);
    const st = [];
    for (let i = n - 1; i >= 0; i--) {
        const x = prices[i];
        while (st.length && x < prices[st[st.length - 1]]) {
            st.pop();
        }
        if (st.length) {
            ans[i] = x - prices[st[st.length - 1]];
        } else {
            ans[i] = x;
        }
        st.push(i);
    }
    return ans;
};