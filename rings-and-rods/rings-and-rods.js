/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let hashMap = {};
    let result = 0;
    let ringsLength = rings.length;
    for(let i=0; i<ringsLength; i+=2) {
        if(hashMap[rings[i+1]]) {
            hashMap[rings[i+1]].add(rings[i]);
        } else {
            hashMap[rings[i+1]] = new Set(rings[i]);
        }
    }
    
    for (const [key, value] of Object.entries(hashMap)) {
        if(value.size === 3) result++
    }
    return result;
};