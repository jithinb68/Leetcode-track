/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let digits = num.toString().split('');
    digits = digits.sort()
    return parseInt(digits[0] + digits[3]) + parseInt(digits[1] + digits[2]);
};