import {ListNode} from "@/leetcode/datastruct/ListNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0, head);
    let left = dummy, right = dummy;
    while (n > 0) {
        right = right.next;
        n--;
    }
    while (right.next != null) {
        left = left.next;
        right = right.next;
    }
    left.next = left.next.next;
    return dummy.next;
};