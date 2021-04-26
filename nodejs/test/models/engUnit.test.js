const EngUnit = require( '../../src/models/EngUnitObject' );
const EngUnitType = require( '../../src/models/EngUnitType' );

describe( 'EngUnit tests', () => {
    test( 'Simple instance tests', () => {
        let eu = new EngUnit("Foot", ["Feet", "ft"], 0.3048, "Length");

        expect( eu.name ).toBe( "Foot" );
        expect( eu.aliases ).toContain( "Feet" );
        expect( eu.aliases ).toContain( "ft" );
        expect( eu.engType ).toBe( EngUnitType.Length );
        expect( eu.convertToBase(1) ).toBe(0.3048);
        expect( eu.convertFromBase(0.3048) ).toBe(1);
    })
})
