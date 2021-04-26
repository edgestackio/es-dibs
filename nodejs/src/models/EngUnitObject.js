const EngUnitType = require( './EngUnitType' );

class EngUnit {
    constructor( name, aliases, convfactor, typename ) {
        this.name = name;
        this.engType = EngUnitType.getType( typename );
        this.convfactor = convfactor;
        this.aliases = aliases;
    }

    convertToBase( input ) {
        if( this.engType.name === 'Temperature' ) {
            if( this.name === 'Fahrenheit' ) {
                return (input - 32) * 0.55555555555;
            }
            else if( this.name === 'Kelvin' ) {
                return (input - 273.15);
            }
            else {
                return input;
            }
        }
        else {
            return input * this.convfactor;
        }
    }

    convertFromBase( input ) {
        if( this.engType.name === 'Temperature' ) {
            if( this.name === 'Fahrenheit' ) {
                return (input * 1.8) + 32;
            }
            else if( this.name === 'Kelvin' ) {
                return input + 273.15;
            }
            else {
                return input;
            }
        }
        return input / this.convfactor;
    }
}

module.exports = EngUnit;
