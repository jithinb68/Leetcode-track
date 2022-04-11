/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
   const sorted = [...nums].sort((a, b) => a - b);
   return nums.map(num => {
    let [ start, end ] = [0, sorted.length - 1];
    while (start <= end ) {
        let mid = Math.floor((start + end) / 2);
        if(sorted[mid] === num && sorted[mid - 1]  !== num) return mid;
        if(sorted[mid] < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
   });
};