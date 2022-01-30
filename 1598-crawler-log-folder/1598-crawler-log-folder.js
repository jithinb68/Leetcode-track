/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let myStack = 0;
    for(let i=0; i<logs.length; i++) {
        if(logs[i] === '../') {
           if(myStack) myStack--;
        } else if(logs[i] != './') {
            myStack++
        } 
    } 
    return myStack;
};