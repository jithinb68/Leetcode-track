/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
   let maxNestingDepth = 0;
   let currMaxDepth = 0;
   let strArr = s.split('');
    for(const item of strArr) {
        if(item === '(') {
            currMaxDepth = Math.max(++maxNestingDepth, currMaxDepth)
        } else if(item === ')') {
            maxNestingDepth--;
        }
    }
    return currMaxDepth;
};