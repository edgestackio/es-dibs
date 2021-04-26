const func = require('../src/definitionFunction');
const EngineeringUnits = require('../src/models/EngineeringUnits');

describe( 'load data tests', () => {
    test('basic load', () => {
        func.loadData();
        expect( func.getData() ).toBeDefined();
        expect( func.getData() ).not.toBeNull();
    })
})

describe( 'findById tests', () => {
    test( 'find by each root id', () => {
        let dib = func.findById('1');
        expect( dib ).toBeDefined();
        expect( dib.canonical ).toBe( 'temp' );

        dib = func.findById('2');
        expect( dib ).toBeDefined();
        expect( dib.canonical ).toBe( 'pressure' );
    })

    test ( 'find temperature children', () => {
        let dib = func.findById('1');
        expect( dib ).toBeDefined();
        expect( dib.canonical ).toBe( 'temp' );

        dib = func.findById('1.1');
        expect( dib ).toBeDefined();
        expect( dib.canonical ).toBe( 'temp.us' );

        dib = func.findById('1.1.1');
        expect( dib ).toBeDefined();
        expect( dib.canonical ).toBe( 'temp.us.oilgas' );

        let dibs = func.findChildrenForId('1');
        expect( dibs ).toBeDefined();
        expect( dibs ).toHaveLength( 2 );
        expect( dibs[0].canonical ).toBe( "temp.us" );
        expect( dibs[1].canonical ).toBe( "temp.eu" );

        dibs = func.findChildrenForId('1.1');
        expect( dibs ).toBeDefined();
        expect( dibs ).toHaveLength( 1 );
        expect( dibs[0].canonical ).toBe( 'temp.us.oilgas' );
        expect( dibs[0].name ).toBe( "U.S. Oil and Gas Temperature" );
    })
})

describe( 'findByCanonical tests', () => {
    test( 'find by each root its canonical name', () => {
        let dib = func.findByCanonical('temp');
        expect( dib ).toBeDefined();
        expect( dib.name ).toBe( 'Temperature' );

        dib = func.findByCanonical('pressure');
        expect( dib ).toBeDefined();
        expect( dib.name ).toBe( 'Pressure' );
    })
})

describe( 'test units', () => {
    test( 'getUnits', () => {
        let units = func.getUnits();
        expect( units ).toBeDefined();
        expect( units ).toHaveProperty( 'Meter' );
    })
})
