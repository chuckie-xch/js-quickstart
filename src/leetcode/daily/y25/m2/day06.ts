function permuteUnique(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const ans = [];
    const path = Array(n);
    const onPath = Array(n).fill(false);

    function dfs(i: number) {
        if (i == n) {
            ans.push([...path]);
            return;
        }
        for (let j = 0; j < n; j++) {
            if (onPath[j] || (j > 0 && nums[j] === nums[j - 1] && !onPath[j - 1])) {
                continue;
            }
            path[i] = nums[j];
            onPath[j] = true;
            dfs(i + 1);
            onPath[j] = false;
        }
    }

    dfs(0);

    return ans;
}