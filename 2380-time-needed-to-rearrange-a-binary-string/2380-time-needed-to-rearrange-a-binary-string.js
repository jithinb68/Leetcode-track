/**
 * @param {string} s
 * @return {number}const isReplaced = false;
 */
var secondsToRemoveOccurrences = function(s) {
   let zeros = 0, seconds = 0;
    for (let i = 0; i < s.length; ++i) {
        zeros += s.charAt(i) == '0' ? 1 : 0;
        if (s.charAt(i) == '1' && zeros > 0) {
             seconds = Math.max(seconds + 1, zeros);
        }
    }
    return seconds; 
};