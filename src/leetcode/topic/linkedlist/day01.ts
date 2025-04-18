import {ListNode} from "@/leetcode/datastruct/ListNode";

function getDecimalValue(head: ListNode | null): number {
    head = reverse(head)
    let ans = 0;
    let bit = 0;
    while (head != null) {
        ans += Math.pow(2, bit++) * head.val;
        head = head.next;
    }
    return ans;
};

function reverse(head: ListNode | null): ListNode {
    let pre: ListNode = null;
    let next: ListNode = null;
    while (head != null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}