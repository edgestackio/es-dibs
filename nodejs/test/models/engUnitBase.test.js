const EngUnitBase = require( '../../src/models/EngUnitBase' );

describe( 'EngUnitBase tests', () => {
    test( 'Simple name tests', () => {
        expect( EngUnitBase.Meter ).toBeDefined();
        expect( EngUnitBase.Meter.name ).toBe( "Meter" );
        expect( EngUnitBase.Kilogram).toBeDefined();
        expect( EngUnitBase.Kilogram.name ).toBe( "Kilogram" );
        expect( EngUnitBase.Liter).toBeDefined();
        expect( EngUnitBase.Liter.name ).toBe( "Liter" );
        expect( EngUnitBase.SquareKilometer).toBeDefined();
        expect( EngUnitBase.SquareKilometer.name ).toBe( "SquareKilometer" );
        expect( EngUnitBase.kPa).toBeDefined();
        expect( EngUnitBase.kPa.name ).toBe( "kPa" );
        expect( EngUnitBase.mCubed_d).toBeDefined();
        expect( EngUnitBase.mCubed_d.name ).toBe( "mCubed_d" );
        expect( EngUnitBase.kgM).toBeDefined();
        expect( EngUnitBase.kgM.name ).toBe( "kgM" );
        expect( EngUnitBase.N_m_sec).toBeDefined();
        expect( EngUnitBase.N_m_sec.name ).toBe( "N/m/sec" );
    })
})
