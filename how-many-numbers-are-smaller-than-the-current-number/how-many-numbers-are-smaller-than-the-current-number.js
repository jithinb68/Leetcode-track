/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = []
    for(let i=0; i<nums.length; i++) {
        let curr = 0;
        for(let j=0; j< nums.length; j++) {
            if(i !== j && nums[i] > nums[j]) {
                curr++
            }
        }
        result.push(curr);
    }
    return result
};