/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let goal = nums.length-1;
    for(let i=nums.length-1; i>=0; i--) {
        if(i + nums[i] >= goal) {
          goal = i;
        }
    }
    return goal === 0;
};

// let reachable = 0;
// for(let i=0; i<nums.length; i++) {
//    if(reachable < i) {
//        return false
//    }
//    reachable = Math.max(reachable, i + nums[i])
// }
// return true;