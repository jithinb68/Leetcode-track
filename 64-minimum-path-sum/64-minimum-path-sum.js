/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = Array(grid.length).fill(0).map(()=>Array(grid[0].length).fill(0));
    for(let i=0; i<dp.length; i++) {
        for(let j=0; j<dp[i].length; j++) {
            dp[i][j] += grid[i][j]
            if(i>0 && j>0) {
                dp[i][j] += Math.min(dp[i-1][j], dp[i][j-1])
            } else  if(i>0) {
                dp[i][j] += dp[i-1][j];
            } else if(j>0) {
                dp[i][j] += dp[i][j-1];
            }
        }
    }
    return dp[grid.length -1][dp[0].length -1];
};