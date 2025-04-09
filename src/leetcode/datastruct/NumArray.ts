class NumArray {

    s: number[];

    constructor(nums: number[]) {
        this.s = Array(nums.length + 1);
        this.s[0] = 0;
        for (let i = 0; i < nums.length; i++) {
            this.s[i + 1] = this.s[i] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        return this.s[right + 1] - this.s[left];
    }
}