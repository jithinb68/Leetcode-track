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
            // console.log('if' + k);
            if(k===0) {
                kPopped = true;
            }
            tickets.shift();
        } else {
            // console.log('else' + k);
            tickets.push(tickets.shift());
            if(k===0) {
                k = tickets.length;
            }
        }
        k--;
        // console.log(tickets);
    }
   return time;
};