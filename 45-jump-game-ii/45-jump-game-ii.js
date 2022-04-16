/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let result = 0;
    let l = r = 0;
    while(r<(nums.length-1)) {
        let farthest = 0;
        for(i=l;i<r+1;i++) {
            farthest = Math.max(farthest, i+nums[i])
        }
        l = r+1
        r= farthest;
        result += 1;
    }
    return result
};