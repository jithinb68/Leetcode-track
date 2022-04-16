/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let l = 0;
    let r = height.length - 1;
    let i = 0;
    while(l<r) {
        let area = (Math.min(height[l], height[r]) * (height.length - 1 - i));
        maxArea = Math.max(maxArea, area);
        if(height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
        i++;            
    }
    return maxArea;
};