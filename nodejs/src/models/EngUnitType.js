const EngUnitBase = require('./EngUnitBase');

var EngUnitType = {
    Length : { name:"Length", base:EngUnitBase.Meter },
    Mass : { name:"Mass", base:EngUnitBase.Kilogram },
    Volume : { name:"Volume", base:EngUnitBase.Liter },
    Area : { name:"Area", base:EngUnitBase.SquareKilometer },
    Pressure : { name:"Pressure", base:EngUnitBase.kPa },
    "Flow rate" : { name:"Flow rate", base:EngUnitBase.mCubed_d },
    Torque : { name:"Torque", base:EngUnitBase.kgM },
    Power : { name:"Power", base:EngUnitBase.N_m_sec },
    Temperature : { name:"Temperature", base:EngUnitBase.Celcius },

    getType : function( name ) {
        return this[name]; 
    },

    getEngUnitTypes : function() {
        return [ this.Length, 
                 this.Mass,
                 this.Volume,
                 this.Area,
                 this.Pressure,
                 this["Flow rate"],
                 this.Torque,
                 this.Power,
                 this.Temperature
               ];
    }
}

module.exports = EngUnitType;
