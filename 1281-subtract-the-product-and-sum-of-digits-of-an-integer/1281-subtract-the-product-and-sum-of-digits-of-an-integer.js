/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let numArr = String(n).split('');
    return numArr.reduce((acc, curr) => parseInt(acc) * parseInt(curr), 1) - numArr.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0)
};