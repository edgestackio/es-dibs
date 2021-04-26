const EngUnit = require('./EngUnitObject');

let EngineeringUnits = {
    /**
     * All of the predefined enginerring units
     */
    units : {
        Meter : new EngUnit("Meter", ["Metre"], 1, "Length"),
        Metre : new EngUnit("Meter", ["Metre"], 1, "Length"),
        Millimeter : new EngUnit("Millimeter", ["mm"], 0.001, "Length"),
        mm : new EngUnit("Millimeter", ["mm"], 0.001, "Length"),
        Centimeter : new EngUnit("Centimeter", [ "cm" ], 0.01, "Length"),
        cm : new EngUnit("Centimeter", [ "cm" ], 0.01, "Length"),
        Kilometer : new EngUnit("Kilometer", [ "km" ], 1000, "Length"),
        km : new EngUnit("Kilometer", [ "km" ], 1000, "Length"),
        Inches : new EngUnit("Inches", [ "in" ], 0.0254, "Length"),
        "in" : new EngUnit("Inches", [ "in" ], 0.0254, "Length"),
        Foot : new EngUnit("Foot", [ "Feet" ], 0.3048, "Length"),
        Feet : new EngUnit("Foot", [ "Feet" ], 0.3048, "Length"),
        Yard : new EngUnit("Yard", [ "Yd" ], 0.9144, "Length"),
        Yd : new EngUnit("Yard", [ "Yd" ], 0.9144, "Length"),
        Mile : new EngUnit("Mile", [ "Mi" ], 1609.344, "Length"),
        Mi : new EngUnit("Mile", [ "Mi" ], 1609.344, "Length"),
        FeetUSSurvey : new EngUnit("FeetUSSurvey", [], 0.3048006095, "Length"),
        InchUSSurvey : new EngUnit("InchUSSurvey", [], 0.0254000508, "Length"),

        Kilograms : new EngUnit("Kilograms", ["kg"], 1, "Mass"),
        kg : new EngUnit("Kilograms", ["kg"], 1, "Mass"),
        Grams : new EngUnit("Grams", [], 0.001, "Mass"),
        Hectogram : new EngUnit("Hectogram", [], 0.1, "Mass"),
        Pounds : new EngUnit("Pounds", ["lbs"], 0.45359237, "Mass"),
        lbs : new EngUnit("Pounds", ["lbs"], 0.45359237, "Mass"),
        Ounces : new EngUnit("Ounces", ["oz"], 0.028349523125, "Mass"),
        oz : new EngUnit("Ounces", ["oz"], 0.028349523125, "Mass"),

        Liter : new EngUnit("Liter", ["Litre"], 1, "Volume"),
        Litre : new EngUnit("Liter", ["Litre"], 1, "Volume"),
        CubicCentimetres : new EngUnit("CubicCentimetres", ["cc"], 0.001, "Volume"),
        cc : new EngUnit("CubicCentimetres", ["cc"], 0.001, "Volume"),
        CubicMetres : new EngUnit("CubicMetres", [], 1000, "Volume"),
        Millilitres : new EngUnit("Millilitres", ["ml"], 0.001, "Volume"),
        ml : new EngUnit("Millilitres", ["ml"], 0.001, "Volume"),
        bbl : new EngUnit("bbl", [], 158.98729493, "Volume"),
        Gallons : new EngUnit("Gallons", [], 3.785411784, "Volume"),
        Cups : new EngUnit("Cups", [], 0.2365882365, "Volume"),
        FluidOunces : new EngUnit("FluidOunces", [], 0.029573529563, "Volume"),
        TeaSpoon : new EngUnit("TeaSpoon", [], 0.0049289215938, "Volume"),
        TableSpoon : new EngUnit("TableSpoon", [], 0.014786764781, "Volume"),
        CubicFeet : new EngUnit("CubicFeet", [], 28.316846592, "Volume"),
        CubicInch : new EngUnit("CubicInch", [], 0.016387064, "Volume"),
        mcf : new EngUnit("mcf", [], 28316.846592, "Volume"),

        SquareKilometer : new EngUnit("SquareKilometer", [], 1, "Area"),
        SquareMile : new EngUnit("SquareMile", [], 2.5899985, "Area"),
        Hectare : new EngUnit("Hectare", [], 0.01, "Area"),
        Acre : new EngUnit("Acre", [], 0.0040468564224, "Area"),
        SquareMeter : new EngUnit("SquareMeter", ["SquareMetre"], 0.000001, "Area"),
        SquareCentimeter : new EngUnit("SquareCentimeter", ["SquareCentimetre"], 0.0000000001, "Area"),
        SquareCentimetre : new EngUnit("SquareCentimeter", ["SquareCentimetre"], 0.0000000001, "Area"),
        SquareMillimeter : new EngUnit("SquareMillimeter", ["SquareMillimetre"], 0.000000000001, "Area"),
        SquareMillimetre : new EngUnit("SquareMillimeter", ["SquareMillimetre"], 0.000000000001, "Area"),
        SquareInch : new EngUnit("SquareInch", [], 0.00000000064516, "Area"),
        SquareFoot : new EngUnit("SquareFoot", [], 0.00000009290304, "Area"),
        SquareFootSurvey : new EngUnit("SquareFootSurvey", [], 0.000000092903412, "Area"),

        kPa : new EngUnit("kPa", [], 1, "Pressure"),
        psi : new EngUnit("psi", [], 6.89475728, "Pressure"),
        gPa : new EngUnit("gPa", [], 1000000, "Pressure"),
        pas : new EngUnit("pas", [], 0.001, "Pressure"),
        atm : new EngUnit("atm", [], 98.0665, "Pressure"),

        mCubed_d : new EngUnit("mCubed_d", ["m3d", "m3/d"], 1, "Flow rate"),
        m3d : new EngUnit("mCubed_d", ["m3d", "m3/d"], 1, "Flow rate"),
        "m3/d" : new EngUnit("mCubed_d", ["m3d", "m3/d"], 1, "Flow rate"),
        mCubed_s : new EngUnit("mCubed_s", ["m3_s", "m3/s"], 86400.000001, "Flow rate"),
        m3_s : new EngUnit("mCubed_s", ["m3_s", "m3/s"], 86400.000001, "Flow rate"),
        "m3/s" : new EngUnit("mCubed_s", ["m3_s", "m3/s"], 86400.000001, "Flow rate"),
        mcf_d : new EngUnit("mcf_d", ["mcf/d", "mcfd"], 28.316847, "Flow rate"),
        "mcf/d" : new EngUnit("mcf_d", ["mcf/d", "mcfd"], 28.316847, "Flow rate"),
        mcfd : new EngUnit("mcf_d", ["mcf/d", "mcfd"], 28.316847, "Flow rate"),
        cuFt_day : new EngUnit("cuFt_day", ["muFt/day"], 0.028316847, "Flow rate"),
        "muFt/day": new EngUnit("cuFt_day", ["muFt/day"], 0.028316847, "Flow rate"),
        bpd : new EngUnit("bpd", ["barrel/day"], 0.1192404712, "Flow rate"),
        "barrel/day" : new EngUnit("bpd", ["barrel/day"], 0.1192404712, "Flow rate"),
            
        Nm : new EngUnit("Nm", [], 1, "Torque"),
        kgM : new EngUnit("kgM", [], 9.80665, "Torque"),
        lbsFt : new EngUnit("lbsFt", [], 1.355817952, "Torque"),

        "N/m/sec" : new EngUnit("N/m/sec", [], 1, "Power"),
        "lb/ft/sec" : new EngUnit("lb/ft/sec", [], 1.355817948, "Power"),
        HP : new EngUnit("HP", [], 745.699871582, "Power"),

        Celsius : new EngUnit("Celsius", ["C"], 1, "Temperature"),
        C : new EngUnit("Celsius", ["C"], 1, "Temperature"),
        Fahrenheit : new EngUnit("Fahrenheit", ["F"], 33.8, "Temperature"),
        F : new EngUnit("Fahrenheit", ["F"], 33.8, "Temperature"),
        Kelvin : new EngUnit("Kelvin", ["K"], 273.15, "Temperature"),
        K : new EngUnit("Kelvin", ["K"], 273.15, "Temperature")
    },

    /**
     * Returns the EngUnit by its name
     */
    getEngUnit : function( name ) {
        return this.units[name];
    },

    /**
     * Returns all of the EngUnit for a given type, such as Length, Mass, etc.
     */
    getUnitsForType : function( name ) {
        var ret = [];
        for( var key in this.units ) {
            var engunit = this.units[key];
            if( engunit.engType.name === name ) {
                ret.push( engunit );
            }
        }

        return ret;
    },

    /**
     * Attempts to convert from one unit to another.
     */
    convert : function( from, to, value ) {
        if( this.units[from] === undefined ) {
            throw from + " is not a valid unit";
        }
        if( this.units[to] === undefined ) {
            throw to + " is not a valid unit";
        }

        var fromUnit = this.units[from];
        var toUnit = this.units[to];
        if( fromUnit.engType.name != toUnit.engType.name ) {
            throw "Cannot convert " + from + " to a " + to;
        }

        var output = fromUnit.convertToBase( value );
        //console.log( "Output from " + from + " to base is " + output );
        var output = toUnit.convertFromBase( output );
        //console.log( "Output to " + to + " from base is " + output );

        return output;
    }

}

module.exports = EngineeringUnits;
