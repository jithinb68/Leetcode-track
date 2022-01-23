/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    if(s === '()') return 1;
   let maxNestingDepth = 0;
   let currMaxDepth = 0;
   let stack = [];
   let hashMap = {}
   let strArr = s.split('');
    for(const item of strArr) {
        if(item === '(') {
            stack.push(item);
            maxNestingDepth++;
            if(maxNestingDepth > currMaxDepth) {
                currMaxDepth = maxNestingDepth;
            }
        } else if(item === ')') {
            stack.pop();
            maxNestingDepth--;
        }
    }
    return currMaxDepth;
};