function carFleet(target: number, position: number[], speed: number[]): number {
    const n = position.length;
    const t = Array(target).fill(0);
    const st = [];
    for (let i = 0; i < n; i++) {
        t[position[i]] = (target - position[i]) / speed[i];
    }
    for (let i = 0; i < target; i++) {
        const x = t[i];
        if (x != 0) {
            while (st.length && x >= t[st[st.length - 1]]) {
                st.pop();
            }
            st.push(i);
        }
    }
    return st.length;
};