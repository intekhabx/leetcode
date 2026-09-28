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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // Reverse l1
    let prev1: ListNode | null = null;
    let curr1 = l1;

    // while (curr1 !== null) {
    //     const next = curr1.next;
    //     curr1.next = prev1;
    //     prev1 = curr1;
    //     curr1 = next;
    // }

    // Reverse l2
    let prev2: ListNode | null = null;
    let curr2 = l2;

    // while (curr2 !== null) {
    //     const next = curr2.next;
    //     curr2.next = prev2;
    //     prev2 = curr2;
    //     curr2 = next;
    // }

    // prev1 and prev2 are now the heads
    // of the reversed lists
    // curr1 = prev1;
    // curr2 = prev2;

    // Add the numbers
    let result = new ListNode(0);
    let resultCurr = result;

    let carry = 0;

    while (curr1 !== null || curr2 !== null || carry !== 0) {
        const val1 = curr1?.val ?? 0;
        const val2 = curr2?.val ?? 0;

        const sum = val1 + val2 + carry;

        const digit = sum % 10;
        carry = Math.floor(sum / 10);

        resultCurr.next = new ListNode(digit);
        resultCurr = resultCurr.next;

        curr1 = curr1?.next ?? null;
        curr2 = curr2?.next ?? null;
    }

    return result.next;
};