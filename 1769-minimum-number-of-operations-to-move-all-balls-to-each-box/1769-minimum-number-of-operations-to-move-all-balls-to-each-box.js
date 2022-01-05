/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let result = [];
    let movement = 0;
    let boxArr = boxes.split('');
    let boxArrLen = boxArr.length;
    for(let i=0; i<boxArrLen; i++) {
        for( let j=0; j<boxArrLen; j++) {
            if(boxes[j] === '1') {
                movement += Math.abs(j - i);
            }        
        } 
        result.push(movement);
        movement = 0;
    }
    return result;
};