/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let result = [];
    for(let i=0; i<ops.length; i++) {
        if(!isNaN(ops[i])) {
            result.push(ops[i]);
        } else if(ops[i] === 'C') {
            result.pop();
        } else if(ops[i] === 'D') {
            result.push(result[result.length -1] * 2);
        } else if(ops[i] === '+') {
            result.push(parseInt(result[result.length -1]) + parseInt(result[result.length -2]));
        }
    }
    return result.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0)
};