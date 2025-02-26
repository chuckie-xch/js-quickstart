function numOfSubArrays(arr: number[], k: number, threshold: number): number {
    let ans = 0;
    let sum = 0;
    threshold = threshold * k;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (i + 1 < k) {
            continue;
        }
        ans += sum >= threshold ? 1 : 0;
        sum -= arr[i - k + 1];
    }
    return ans;
}