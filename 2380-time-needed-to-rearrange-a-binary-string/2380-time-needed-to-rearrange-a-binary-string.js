/**
 * @param {string} s
 * @return {number}const isReplaced = false;
 */
var secondsToRemoveOccurrences = function(s) {
   let secondsTaken = -1;
   s = s.split('');
   function replaceFindings(s) {
        secondsTaken++;
        const sLen = s.length;
        let isReplaced = false;
        for(let i=0; i<=sLen; i++) {
            if(i < s.length-1 && s[i] < s[i+1]) {
                isReplaced = true;
                s[i] = '1';
                s[i+1] = '0';
                i = i+1;
            }
        }
        if(isReplaced) {
            isReplaced = false;
            replaceFindings(s)
        }
        return secondsTaken
    }
    return replaceFindings(s);
};