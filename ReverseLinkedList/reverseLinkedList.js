/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let listValues = [];
    let resultHead = new ListNode(0);
    let current = head;
    
    while(current){
        listValues.push(current.val);
        current = current.next;
    }
    
    current = resultHead;
    
    while(listValues.length > 0){
      
        current.next = new ListNode(listValues.pop());
        current = current.next;
            
    }
    
    return resultHead.next;
};

var reverseList2 = function(head) {
    
    let previous = null;
    let next;
    
    while(head){
        
        next = head.next;
        head.next = previous;
        previous = head;
        head = next;
        
    }
    
    return previous;
};