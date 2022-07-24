/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = '';
     
    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = num1.charAt(i) - '0';
        const digit2 = num2.charAt(j) - '0';
        const digitsSum = digit1 + digit2 + carry;
        sum = `${digitsSum % 10}${sum}`;
        carry = Math.floor(digitsSum / 10);
        i--;
        j--;
    }
    
    return sum;
};