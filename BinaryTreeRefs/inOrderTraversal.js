/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inOrderTraversal = function(root) {
    
    if(!root) return [];
    let stack = [];
    let result = [];
    
    stack.push(root);
    
    while(stack.length > 0){
        
        let node = stack[stack.length-1];
        
        result.push(node.val);
        
        if(node.left){

            stack.push(node.left);
            node.left = null;


        } else {

            result.push(stack.pop().val);

            if(node.right){
                stack.push(node.right);
            }

        }
    }
    
    return result;
      
};


module.exports={inOrderTraversal}