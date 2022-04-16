/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let maxSub = nums[0];
    for(let i=0; i<nums.length; i++) {
        if(sum < 0) {
            sum = 0;
        } 
        sum += nums[i];
        maxSub = Math.max(maxSub, sum)
    }
    return maxSub;
};