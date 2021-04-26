const EngUnitType = require( '../../src/models/EngUnitType' );
const EngUnitBase = require( '../../src/models/EngUnitBase' );

describe( 'EngUnitType tests', () => {
    test( 'Simple tests', () => {
        expect( EngUnitType.Length).toBeDefined();
        expect( EngUnitType.Length.name ).toBe( "Length" );
        expect( EngUnitType.Length.base ).toBe( EngUnitBase.Meter );
        expect( EngUnitType.Mass).toBeDefined();
        expect( EngUnitType.Mass.name ).toBe( "Mass" );
        expect( EngUnitType.Mass.base ).toBe( EngUnitBase.Kilogram );
        expect( EngUnitType.Volume ).toBeDefined();
        expect( EngUnitType.Volume.name ).toBe( "Volume" );
        expect( EngUnitType.Volume.base ).toBe( EngUnitBase.Liter );
        expect( EngUnitType.Area).toBeDefined();
        expect( EngUnitType.Area.name ).toBe( "Area" );
        expect( EngUnitType.Area.base ).toBe( EngUnitBase.SquareKilometer );
        expect( EngUnitType.Pressure).toBeDefined();
        expect( EngUnitType.Pressure.name ).toBe( "Pressure" );
        expect( EngUnitType.Pressure.base ).toBe( EngUnitBase.kPa );
        expect( EngUnitType.Flowrate).toBeDefined();
        expect( EngUnitType.Flowrate.name ).toBe( "Flow rate" );
        expect( EngUnitType.Flowrate.base ).toBe( EngUnitBase.mCubed_d );
        expect( EngUnitType.Torque).toBeDefined();
        expect( EngUnitType.Torque.name ).toBe( "Torque" );
        expect( EngUnitType.Torque.base ).toBe( EngUnitBase.kgM );
        expect( EngUnitType.Power).toBeDefined();
        expect( EngUnitType.Power.name ).toBe( "Power" );
        expect( EngUnitType.Power.base ).toBe( EngUnitBase.N_m_sec );
        expect( EngUnitType.Temperature).toBeDefined();
        expect( EngUnitType.Temperature.name ).toBe( "Temperature" );
        expect( EngUnitType.Temperature.base ).toBe( EngUnitBase.Celcius );
    }),

    test( 'getType tests', () => {
        expect( EngUnitType.getType( "Length" ) ).toBeDefined();
        expect( EngUnitType.getType( "Length" ) ).toBe( EngUnitType.Length );
        expect( EngUnitType.getType( "Mass" ) ).toBeDefined();
        expect( EngUnitType.getType( "Mass" ) ).toBe( EngUnitType.Mass );
        expect( EngUnitType.getType( "Volume" ) ).toBeDefined();
        expect( EngUnitType.getType( "Volume" ) ).toBe( EngUnitType.Volume );
        expect( EngUnitType.getType( "Area" ) ).toBeDefined();
        expect( EngUnitType.getType( "Area" ) ).toBe( EngUnitType.Area );
        expect( EngUnitType.getType( "Pressure" ) ).toBeDefined();
        expect( EngUnitType.getType( "Pressure" ) ).toBe( EngUnitType.Pressure );
        expect( EngUnitType.getType( "Flowrate" ) ).toBeDefined();
        expect( EngUnitType.getType( "Flowrate" ) ).toBe( EngUnitType.Flowrate );
        expect( EngUnitType.getType( "Torque" ) ).toBeDefined();
        expect( EngUnitType.getType( "Torque" ) ).toBe( EngUnitType.Torque );
        expect( EngUnitType.getType( "Power" ) ).toBeDefined();
        expect( EngUnitType.getType( "Power" ) ).toBe( EngUnitType.Power );
        expect( EngUnitType.getType( "Temperature" ) ).toBeDefined();
        expect( EngUnitType.getType( "Temperature" ) ).toBe( EngUnitType.Temperature );
    }),

    test( 'getEngUnitTypes array test', () => {
        expect( EngUnitType.getEngUnitTypes() ).toContain( EngUnitType.Length );
        expect( EngUnitType.getEngUnitTypes() ).toContain( EngUnitType.Mass );
        expect( EngUnitType.getEngUnitTypes() ).toContain( EngUnitType.Volume );
        expect( EngUnitType.getEngUnitTypes() ).toContain( EngUnitType.Area );
        expect( EngUnitType.getEngUnitTypes() ).toContain( EngUnitType.Pressure );
        expect( EngUnitType.getEngUnitTypes() ).toContain( EngUnitType.Flowrate );
        expect( EngUnitType.getEngUnitTypes() ).toContain( EngUnitType.Torque );
        expect( EngUnitType.getEngUnitTypes() ).toContain( EngUnitType.Power );
        expect( EngUnitType.getEngUnitTypes() ).toContain( EngUnitType.Temperature );
    })
})
