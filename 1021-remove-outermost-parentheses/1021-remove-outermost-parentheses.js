/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let finalStr = "";
    let myVar = 0;
    for( const item of s) {
        if(item === '(') {
            if(myVar) {
                 finalStr += item
            }
            myVar++
        } else {
            myVar--
            if(myVar) {
                 finalStr += item
            }
        }
    }
    return finalStr;
};