/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let occuranceHashMapWithIndex = {};
    let strArr = s.split('');
    for(let i= 0; i<strArr.length; i++) {
        if(occuranceHashMapWithIndex[strArr[i]]) {
            occuranceHashMapWithIndex[strArr[i]].numberOfTimes++
        } else {
            occuranceHashMapWithIndex[strArr[i]] = {firstIndex: i, numberOfTimes: 1}
        }
    }
    let filteredJson = []
    for(const item in occuranceHashMapWithIndex) {
       if(occuranceHashMapWithIndex[item].numberOfTimes === 1) {
           filteredJson.push(occuranceHashMapWithIndex[item])
       }
    }
    return filteredJson.length ? filteredJson[0].firstIndex : -1;
};