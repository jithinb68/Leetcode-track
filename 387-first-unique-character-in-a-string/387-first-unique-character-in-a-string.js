/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   let unique = s.substring(0, 1);
   let letterMap = new Map()
   for(const itm of s) {
       if(!letterMap.has(itm)) {
          letterMap.set(itm, 1)
       } else {
          letterMap.set(itm, letterMap.get(itm) +1)
       }
   }
   unique = [...letterMap.entries()].find((item) => item[1] === 1)
   return unique ? s.indexOf(unique[0]) : -1;
};





























//  let occuranceHashMapWithIndex = {};
//     let strArr = s.split
//     for(let i= 0; i<strArr.length; i++) {
//         if(occuranceHashMapWithIndex[strArr[i]]) {
//             occuranceHashMapWithIndex[strArr[i]].numberOfTimes++
//         } else {
//             occuranceHashMapWithIndex[strArr[i]] = {firstIndex: i, numberOfTimes: 1}
//         }
//     }
//     let filteredJson = []
//     for(const item in occuranceHashMapWithIndex) {
//        if(occuranceHashMapWithIndex[item].numberOfTimes === 1) {
//            filteredJson.push(occuranceHashMapWithIndex[item])
//        }
//     }
//     return filteredJson.length ? filteredJson[0].firstIndex : -1;