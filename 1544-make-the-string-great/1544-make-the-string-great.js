/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [''];
    for(let str of s) {
        let topElement = stack[stack.length-1];
        if(topElement.toLowerCase() === str.toLowerCase() && topElement !== str) stack.pop()
        else stack.push(str);
    }
    return stack.join('');
};
