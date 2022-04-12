/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let bestProfit = 0;
    let min = prices[0];
    for(let i=0; i<prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i]
        } else if(prices[i] - min > bestProfit) {
            bestProfit = prices[i] - min;
        }
    }
    return bestProfit;
};