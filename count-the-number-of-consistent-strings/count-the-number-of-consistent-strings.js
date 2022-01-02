/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    const wordJson = new Set(allowed);
    for(const word of words) {
        const isAllPresent = word.split('').every((item) => wordJson.has(item));
        if(isAllPresent) count++;
    }
    return count;
};