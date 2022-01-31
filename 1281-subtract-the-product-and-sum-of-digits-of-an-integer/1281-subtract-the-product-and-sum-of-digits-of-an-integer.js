/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let addVal = 0;
    let prodVal = 1;
    String(n).split('').forEach((num) => {
        addVal = addVal + parseInt(num);
        prodVal = prodVal * num;
    });
    return prodVal- addVal;
};