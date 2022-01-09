/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let result = [];
    const numArr =  String(num).split('');
    const numArrLen = numArr.length;
    for(let i=0; i<numArrLen; i++){
        if(numArr[i] === '6') {
            numArr[i] = 9;
            break;
        }
    }
    return numArr.join('');
};