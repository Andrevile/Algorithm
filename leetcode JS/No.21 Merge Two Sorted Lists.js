/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let first_current = list1;
    let second_current = list2;

    let answer_list = new ListNode(0,null);
    let answer_pointer = answer_list;
    while(first_current && second_current){

        if(first_current.val <= second_current.val){
            answer_pointer.next = first_current;
            first_current = first_current.next;
        }else{
            answer_pointer.next = second_current;
            second_current = second_current.next;
        }
        answer_pointer = answer_pointer.next;
    }
    answer_pointer.next = first_current || second_current;
    return answer_list.next

};