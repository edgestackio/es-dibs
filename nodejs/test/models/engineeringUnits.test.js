const EngUnitType = require( '../../src/models/EngUnitType' );
const EngUnitBase = require( '../../src/models/EngUnitBase' );
const EngUnit = require( '../../src/models/EngUnitObject' );
const EngineeringUnits = require( '../../src/models/EngineeringUnits' );

describe( 'EngineeringUnits tests', () => {
    test( 'Simple units tests', () => {
        expect( EngineeringUnits.units.Meter ).toBeDefined();
        expect( EngineeringUnits.getEngUnit("Meter") ).toBeDefined();

        var Meter = EngineeringUnits.getEngUnit("Meter");
        expect( Meter ).toBeDefined();
        expect( Meter ).toBeInstanceOf( EngUnit );

    }),

    test( 'getUnitsForType("Length")', () => {
        var list = EngineeringUnits.getUnitsForType("Length");
        
        expect( list ).toBeDefined();
        expect( list ).toHaveLength( 18 );
        expect( list ).toContain( EngineeringUnits.units.Meter );
        expect( list ).toContain( EngineeringUnits.units.Metre );
    }),

    test( 'getUnitsForType("Mass")', () => {
        var list = EngineeringUnits.getUnitsForType("Mass");
        
        expect( list ).toBeDefined();
        expect( list ).toHaveLength( 8 );
        expect( list ).toContain( EngineeringUnits.units.Kilograms );
        expect( list ).toContain( EngineeringUnits.units.Grams );
    }),

    test( 'getUnitsForType("Volume")', () => {
        var list = EngineeringUnits.getUnitsForType("Volume");
        
        expect( list ).toBeDefined();
        expect( list ).toHaveLength( 16 );
        expect( list ).toContain( EngineeringUnits.units.Liter);
        expect( list ).toContain( EngineeringUnits.units.cc);
    }),

    test( 'getUnitsForType("Area")', () => {
        var list = EngineeringUnits.getUnitsForType("Area");
        
        expect( list ).toBeDefined();
        expect( list ).toHaveLength( 12 );
        expect( list ).toContain( EngineeringUnits.units.SquareMile);
        expect( list ).toContain( EngineeringUnits.units.SquareKilometer);
    }),

    test( 'getUnitsForType("Pressure")', () => {
        var list = EngineeringUnits.getUnitsForType("Pressure");
        
        expect( list ).toBeDefined();
        expect( list ).toHaveLength( 5 );
        expect( list ).toContain( EngineeringUnits.units.kPa);
        expect( list ).toContain( EngineeringUnits.units.psi);
    }),

    test( 'getUnitsForType("Flow rate")', () => {
        var list = EngineeringUnits.getUnitsForType("Flow rate");
        
        expect( list ).toBeDefined();
        expect( list ).toHaveLength( 13 );
        expect( list ).toContain( EngineeringUnits.units.mCubed_d);
        expect( list ).toContain( EngineeringUnits.units.bpd);
    }),

    test( 'getUnitsForType("Power")', () => {
        var list = EngineeringUnits.getUnitsForType("Power");
        
        expect( list ).toBeDefined();
        expect( list ).toHaveLength( 3 );
        expect( list ).toContain( EngineeringUnits.units.HP);
        expect( list ).toContain( EngineeringUnits.units["lb/ft/sec"]);
    }),

    test( 'getUnitsForType("Unknown")', () => {
        var list = EngineeringUnits.getUnitsForType("Unkown");
        
        expect( list ).toBeDefined();
        expect( list ).toHaveLength( 0 );
    })
})

describe( 'EngineeringUnits conversion tests', () => {
    test( 'exceptions', () => {
        expect(() => {
            EngineeringUnits.convert( "Test", "OtherTest", 1 ) 
        }).toThrow( "Test is not a valid unit" );

        expect(() => {
            EngineeringUnits.convert( "Meter", "OtherTest", 1 ) 
        }).toThrow( "OtherTest is not a valid unit" );

        expect(() => {
            EngineeringUnits.convert( "Meter", "Grams", 1 ) 
        }).toThrow( "Cannot convert Meter to a Grams" );
    }),

    test( 'lengths', () => {
        expect( EngineeringUnits.convert( "Meter", "mm", 1 ) ).toBe( 1000 );
        expect( EngineeringUnits.convert( "Meter", "Millimeter", 1 ) ).toBe( 1000 );
        expect( EngineeringUnits.convert( "mm", "Meter", 1 ) ).toBe( 0.001 );
        expect( EngineeringUnits.convert( "Millimeter", "Meter", 1 ) ).toBe( 0.001 );
    }), 

    test( 'mass', () => {
        expect( EngineeringUnits.convert( "Kilograms", "Grams", 1 ) ).toBe( 1000 );
        expect( EngineeringUnits.convert( "Grams", "Kilograms", 1 ) ).toBe( 0.001 );
    })

    test( 'temp', () => {
        expect( EngineeringUnits.convert( "C", "K", 1 ) ).toBe( 274.15 );
        expect( EngineeringUnits.convert( "C", "F", 1 ) ).toBe( 33.8 );
        expect( EngineeringUnits.convert( "F", "C", 33.8 ) ).toBe( 0.9999999999899984 );
        expect( EngineeringUnits.convert( "F", "K", 1 ) ).toBe( 255.92777777794998 );
    })
})
