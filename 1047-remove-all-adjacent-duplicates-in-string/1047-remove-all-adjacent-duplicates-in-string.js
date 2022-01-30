/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let myStack = [];
    for(let item of s) {
        if(myStack[myStack.length -1] === item) {
            myStack.pop();
        } else {
            myStack.push(item);
        }
    }
    return myStack.join('');
};