/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.parkingSystem = {
        'small': small,
        'medium': medium,
        'big': big
    };
    // console.log(this.parkingSystem);
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    const hashMap = {
        1: 'big',
        2: 'medium',
        3: 'small'
    }
    if(this.parkingSystem[hashMap[carType]]) {
        this.parkingSystem[hashMap[carType]]--;
        return true
    } else {
        return false;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */