/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        nums[mid] >= target ? r = mid : l = mid + 1;
    }
    if (nums[l] !== target) return [-1, -1];
    let start = l;
    r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        nums[mid] <= target ? l = mid + 1 : r = mid;
    }
    let end = nums[l] === target ? l : l - 1;
    return [start, end];
};