import {ListNode} from "@/leetcode/datastruct/ListNode";

function reverseList(head: ListNode | null): ListNode | null {
    let pre = null;
    let next = null;
    while (head != null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};