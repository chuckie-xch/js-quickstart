import {ListNode} from "@/leetcode/datastruct/ListNode";

function middleNode(head: ListNode | null): ListNode | null {
    let fast = head, slow = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};