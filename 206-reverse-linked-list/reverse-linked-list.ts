/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {

    if(head === null) return head;

    let prev = null;
    let curr = head;
    let nxt = curr.next;

    while(nxt !== null){
        curr.next = prev;
        prev = curr;
        curr = nxt;
        nxt = nxt.next;
    }

    curr.next = prev;
    return curr;
};