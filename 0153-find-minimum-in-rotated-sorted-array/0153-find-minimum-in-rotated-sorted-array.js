/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // currValue = nums[0];
    for(let i=1; i<nums.length; i++) {
        if(nums[i] < nums[i-1]) {
            return nums[i];
        }
    }
    return nums[0];
};