import {ListNode} from "@/leetcode/datastruct/ListNode";

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let dummy = new ListNode(0, head);
    let p0 = dummy;
    for (let i = 0; i < left - 1; i++) {
        p0 = p0.next;
    }
    let pre = null;
    let cur = p0.next;
    for (let i = 0; i < right - left + 1; i++) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    p0.next.next = cur;
    p0.next = pre;
    return dummy.next;
};