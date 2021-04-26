const func = require('./definitionFunction');

module.exports.handler = (event, context, callback) => {
    let paths = {
        'units' : func.getUnits,
        'id' : func.findById
    };
        
    let path = event.path.replace('/definition/','');
    console.log( "PATH:", path );

    let funcToCall = paths[path];
    var reply = null;
    if( path.startsWith('id') ) {
        let id = path.replace('id/', '');
        reply = func.findById( id );
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
