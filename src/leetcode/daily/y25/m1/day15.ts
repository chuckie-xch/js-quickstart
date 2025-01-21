import {MinPriorityQueue} from "@datastructures-js/priority-queue";


function minOperations(nums: number[], k: number): number {
    const heap = new MinPriorityQueue<number>();
    for (const num of nums) {
        heap.enqueue(num);
    }
    let ans = 0;
    for (; heap.size() > 1 && heap.front() < k; ++ans) {
        const x = heap.dequeue();
        const y = heap.dequeue();
        heap.enqueue(x * 2 + y);
    }
    return ans;
}