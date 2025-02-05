function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    const ans = [];
    const path = [];

    function dfs(i: number) {
        if (i == len) {
            ans.push([...path]);
            return;
        }
        const x = nums[i];
        path.push(x);
        dfs(i + 1);
        path.pop();
        i++;
        while (i < len && nums[i] === x) {
            i++;
        }
        dfs(i);
    }

    dfs(0);
    return ans;
}