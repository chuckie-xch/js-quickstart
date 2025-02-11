function findMaxAverage(numbers: number[], k: number): number {
    const len = numbers.length;
    let maxSum = -Infinity;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += numbers[i];
        if (i + 1 < k) {
            continue;
        }
        maxSum = Math.max(maxSum, sum);
        sum -= numbers[i - k + 1];
    }
    return maxSum / k;
}