/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let strArr = s.split('');
    let stack = [];
    let backupStack = [];
    let finalStr = "";
    for( const item of strArr) {
        backupStack.push(item);
        if(item === '(') {
            stack.push(item);
        } else if(item === ')') {
            stack.pop();
        }
        if(!stack.length) {
            backupStack.shift();
            backupStack.pop();
            finalStr += backupStack.join('');
            backupStack = [];
        }
    }
    return finalStr;
};