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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if(root === null) return 0;
    let stack = [root];
    let sum = 0;
    while(stack.length) {
        let curr = stack.pop();
        if(curr.val >= low && curr.val <= high)sum = sum + curr.val;
        if(curr.right) stack.push(curr.right);
        if(curr.left) stack.push(curr.left);
    }
    return sum;
};