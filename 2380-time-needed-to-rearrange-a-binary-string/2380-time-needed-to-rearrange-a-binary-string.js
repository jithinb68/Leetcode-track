/**
 * @param {string} s
 * @return {number}const isReplaced = false;
 */
var secondsToRemoveOccurrences = function(s) {
   let secondsTaken = 0;
   s = s.split('');
   function replaceFindings(s) {
        const sLen = s.length;
        let isReplaced = false;
        for(let i=0; i<=sLen; i++) {
            if(s[i]==='0' && s[i+1]==='1') {
                isReplaced = true;
                s[i] = '1';
                s[i+1] = '0';
                i = i+1;
            }
        }
        if(isReplaced) {
            secondsTaken++;
            isReplaced = false;
            replaceFindings(s)
        }
        return secondsTaken
    }
    return replaceFindings(s);
};