/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.parkingSystem = {
        '1': { 'type': 'big', 'vacancy': big },
        '2': { 'type': 'medium', 'vacancy': medium },
        '3': { 'type': 'small', 'vacancy': small }
    };
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(this.parkingSystem[carType].vacancy) {
        this.parkingSystem[carType].vacancy--;
        return true
    }
    return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */