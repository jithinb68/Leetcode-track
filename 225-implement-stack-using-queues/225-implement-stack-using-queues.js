
var MyStack = function() {
    this.myStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.myStack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.myStack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.myStack[this.myStack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.myStack.length ? false : true;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */