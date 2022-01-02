/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (const word of words)
        if (isPalindrome(word)) return word;
    return '';
};

const isPalindrome = str => {
    let i = 0, j = str.length - 1;
    while (i < j)
        if (str[i++] != str[j--])
            return false;
    return true;
};