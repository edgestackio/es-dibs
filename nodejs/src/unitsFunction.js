const EngineeringUnits = require('./models/EngineeringUnits')

/**
 * Retrieve all the engineering units available
 */
getUnits = function() {
    return EngineeringUnits.units;
}

convert = function( from, to, value ) {
    return EngineeringUnits.convert( from, to, value );
}

module.exports = {
    getUnits,
    convert
}
