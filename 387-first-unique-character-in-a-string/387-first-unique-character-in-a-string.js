/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   let unique = s.substring(0, 1);
   let letterMap = new Map()
   for(const itm of s) {
       if(!letterMap[itm]) {
          letterMap[itm] = 1;
       } else {
           letterMap[itm]++
       }
   }
    for(let i = 0; i < s.length; i++) {
        if(letterMap[s[i]] === 1) return i
    }    
    return -1
};





























