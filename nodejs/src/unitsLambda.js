const func = require('./unitsFunction');

module.exports.handler = (event, context, callback) => {
    let paths = {
        '' : func.getUnits,
        'convert' : func.convert
    };
        
    let path = event.path.replace('/units/','');
    console.log( "PATH:", path );

    let funcToCall = paths[path];
    var reply = null;
    if( path.startsWith('convert') ) {
        let regex = /([a-zA-Z0-9_]*)\/([a-zA-Z0-9_]*)\/([0-9\.[0-9]+)/;
        let match = path.match(regex);
        let from = match[1];
        let to = match[2];
        let value = match[3];

        reply = { 
            'from' : from,
            'to' : to,
            'valueToConvert' : value,
            'result' : func.convert( match[1], match[2], match[3] )
        };
    }
    else {
        reply = funcToCall();
    }
    console.log( JSON.stringify(reply) );

    var response = {
        statusCode: 200,
        body: JSON.stringify(reply)
    };

    if( reply === undefined ) {
        response.statusCode = 404;
    }

    callback(null, response);
};
