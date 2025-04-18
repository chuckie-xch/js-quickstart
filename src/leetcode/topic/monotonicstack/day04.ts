function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length;
    const ans = Array(n).fill(-1);
    const st = [];
    for (let i = 0; i < n * 2; i++) {
        const index = i % n;
        const x = nums[index];
        while (st.length && x > nums[st[st.length - 1]]) {
            const j = st.pop();
            ans[j] = x;
        }
        if (i < n) {
            st.push(i);
        }
    }
    return ans;
};