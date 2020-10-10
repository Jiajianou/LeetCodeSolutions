// Iterative DFS Solution
// var preorderTraversal = function(root) {
//     if (!root) return [];
//     let stack = [], res = [];
//     stack.push(root);
//     while (stack.length) {
//         let node = stack.pop();
//         res.push(node.val);
//         if (node.right) stack.push(node.right);
//         if (node.left) stack.push(node.left);
//     }
//     return res;
// 	// Time Complexity: O(n)
//     // Space Complexity: O(n)
// };


// // Recursive DFS Solution
// var preorderTraversal = function(root, stack = [], res = []) {
//     if (!root) return [];
//     stack.push(root);
//     res.push(root.val);
//     if (root.left) preorderTraversal(root.left, stack, res);
//     if (root.right) preorderTraversal(root.right, stack, res);
//     return res;
//     // Time Complexity: O(n)
//     // Space Complexity: O(n)
// }



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
var preorderTraversal = function(root) {
    
    if(!root) return [];
    let stack = [];
    let result = [];
    
    stack.push(root);
    
    while(stack.length > 0){
        
        let node = stack.pop();
        
        result.push(node.val);
        
        if(node.right){stack.push(node.right);}
        if(node.left){stack.push(node.left);}
    }
    
    return result;
      
};


module.exports={preorderTraversal}
