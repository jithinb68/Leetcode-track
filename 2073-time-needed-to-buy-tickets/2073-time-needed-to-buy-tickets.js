/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    let kPopped = false
    while(tickets.length && !kPopped) {
        tickets[0]--;
        time++;
        if(tickets[0] === 0) {
            if(k===0) {
                kPopped = true;
            }
            tickets.shift();
        } else {
            if(k===0) {
                k = tickets.length;
            }
            tickets.push(tickets.shift());
        }
        k--;
    }
   return time;
};