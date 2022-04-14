/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const myMap = new Map();
    for(const num of arr) {
        if (myMap.has(num)) {;
            (myMap.set(num, myMap.get(num) + 1))
        } else {
            myMap.set(num, 1);
        }
    }

    let mySet = new Set();
    for (const val of myMap.values()) {
        if (mySet.has(val)) return false
        mySet.add(val)
    }
    return true;
};