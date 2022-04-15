/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
   const sorted = [...nums].sort((a, b) => a - b);
   // const map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));
   //  console.log(map)
   return nums.map(num => sorted.indexOf(num));
};