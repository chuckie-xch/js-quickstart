function canPartition(nums: number[]) {
    let s = 0;
    for (let num of nums) {
        s += num;
    }
    if (s % 2 != 0) {
        return false;
    }
    const n = nums.length;
    const memo = Array.from({length: n}, () => Array(s / 2 + 1).fill(-1));

    function dfs(i: number, j: number): boolean {
        if (i < 0) {
            return j === 0;
        }
        if (memo[i][j] != -1) {
            return memo[i][j] == 1;
        }
        const ans = j >= nums[i] && dfs(i - 1, j - nums[i]) || dfs(i - 1, j);
        memo[i][j] = ans ? 1 : 0;
        return ans;
    }

    return dfs(n - 1, s/2);
}