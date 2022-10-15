/**
 * @param {string} s
 * @return {number}const isReplaced = false;
 */
var secondsToRemoveOccurrences = function(s) {
   let secondsTaken = -1;
   function replaceFindings(s) {
        secondsTaken++;
        let str = "";
        let isReplaced = true;
        for(let i=0; i<s.length; i++) {
            if(i < s.length-1 && s[i] < s[i+1]) {
                isReplaced = false;
                str += s[i+1];
                str += s[i];
                i++;
            } else if(i < s.length){
                str += s[i];
            }
        }
        return isReplaced === true ? secondsTaken : replaceFindings(str);
    }
    return replaceFindings(s);
};