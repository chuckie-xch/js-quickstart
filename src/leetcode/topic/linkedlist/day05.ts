import {ListNode} from "@/leetcode/datastruct/ListNode";

function findMiddle(head: ListNode) {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverseList(cur: ListNode) {
    let pre = null;
    while (cur != null) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

function isPalindrome(head: ListNode | null): boolean {
    let mid = findMiddle(head);
    let head2 = reverseList(mid);
    while (head2 != null) {
        if (head.val != head2.val) {
            return false;
        }
        head = head.next;
        head2 = head2.next;
    }
    return true;
};