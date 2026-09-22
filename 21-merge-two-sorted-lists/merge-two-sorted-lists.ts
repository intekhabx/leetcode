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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 === null && list2 === null) return null;

    if(list1 === null) return list2;
    if(list2 === null) return list1;

    // create a node to start the sorting
    let temp = new ListNode(0);
    let curr = temp;

    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            curr.next = list1;
            list1 = list1.next;
        }
        else{
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    curr.next = list1 ? list1 : list2;

    //0 -> 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null
    //remove temp (0) element and return head
    return temp.next;
}