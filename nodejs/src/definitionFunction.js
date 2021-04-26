const AWS = require('aws-sdk')
, Promise = require('bluebird')

var access_key = '';
var secret_key = '';
var data = null;

/**
 * find the dib by its object id
 */
findById = function( id ) {
    loadData();
    for( dib of data ) {
        if( dib.id === id ) {
            return dib;
        }
    }
}

/**
 * find all the immediate children by id
 */
findChildrenForId = function( id ) {
    loadData();
    let results = [];
    let pattern = new RegExp("^" + id + "[\.].$");
    for( dib of data ) {
        if( pattern.test(dib.id) ) {
            results.push( dib );
        }
    }
    return results;
}

/**
 * given a canonical name, find the dib
 */
findByCanonical = function( can ) {
    loadData();
    for( dib of data ) {
        if( dib.canonical === can ) {
            return dib;
        }
    }
}

loadData = function() {
    if( data === null ) {
        var json = require('./models/model.json');
        data = json;
    }
}

getData = function() {
    return data;
}

module.exports = {
    findById,
    findChildrenForId,
    findByCanonical,
    loadData,
    getData
}
