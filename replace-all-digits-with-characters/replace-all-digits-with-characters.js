/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let sLength = s.length
    let finalStr = ''
    for(let i=0; i<sLength; i+=2) {
        finalStr += s[i+1] ? `${s[i]}${shift(s[i], s[i+1])}` : s[i];
    }
    return finalStr;
};

var shift = function(c, x = 0) {
    return String.fromCharCode(c.charCodeAt(0) + parseInt(x));
}