/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {}
    for(let i=0; i<nums.length; i++) {
        const n = nums[i];
        if(hashMap[target - n] !== undefined) {
            return [hashMap[target - n] ,i];
        }
        hashMap[n] = i;
    }
    return []
};