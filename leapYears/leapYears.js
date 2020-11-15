const leapYears = function() {
    if (arguments[0] % 4 == 0) {
        if (arguments[0] % 400 == 0) {
            return true;
        } 
        
        if (arguments[0] % 100 == 0) {
            return false;
        }
        return true;
    }
    return false;
}

module.exports = leapYears
