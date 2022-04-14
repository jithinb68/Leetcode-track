/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let str of s) {
       switch(str) {
           case '{': stack.push('}');
               break;
           case '[': stack.push(']');
               break;
           case '(': stack.push(')');
               break;
           default: 
               if (str !== stack.pop()) {
                    return false;
                }
       }
    }
    return stack.length === 0;
};