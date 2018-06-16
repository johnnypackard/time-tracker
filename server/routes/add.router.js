const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool' );

router.get( '/', function( req, res ) {
    pool.connect( function( errorConnectingToDatabase, client, done ) {
        if( errorConnectingToDatabase ) {
            console.log( 'error', errorConnectingToDatabase );
            res.sendStatus( 500 );
        } else {
            client.query( 'SELECT * FROM entries ORDER BY id;', function( errorMakingDatabaseQuery, result ) {
                pool.query( queryText )
                if ( errorMakingDatabaseQuery ) {
                    console.log( 'error', errorMakingDatabaseQuery );
                    res.sendStatus( 500 );
                } else {
                    res.send( result.rows );
                }
            });
        }
    });
}); // end get from pool

router.post( '/', ( req, res ) => {
    console.log( 'in add.router POST ', req.body );
    let newEntry = req.body.newEntry;
    const queryText = `INSERT INTO entries ("entry", "project", "date", startTime", "endTime")
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query( queryText, [ newEntry ] )
    .then( ( result ) => {
        console.log( 'successfully added newEntry', req.body );
        res.sendStatus( 201 )
    })
    .catch( ( error ) => {
        console.log( 'error in add.router POST', error );
        res.sendStatus( 500 );
    })
}) // end POST

router.put( '/', ( req, res ) => {
    const entryId = req.params.id;
    console.log( 'in add.router PUT to update' );
    const queryText = 'UPDATE entry WHERE id-$1';
    poll.query( queryText, [ entryId ] )
    .then( ( result ) => {
        res.sendStatus( 200 );
    }).catch( ( error ) => {
        console.log( 'Error in PUT', error );
        res.sendStatus( 500 );
    });
});

router.delete( '/:id', ( req, res ) => {
    const entryId = req.params.id;
    console.log( 'in add.router DELETE', req.params.id );
    const queryText = 'DELETE FROM entries WHERE id=$1';
    pool.query( queryText , [ entryId ] )
    .then( ( result ) => {
        console.log( 'successful DELETE of entry', result );
        res.sendStatus( 200 );
    })
    .catch( ( error ) => {
        console.log( 'error in add.router DELETE', error );
        res.sendStatus( 500 );
    });
}); // end DELETE
module.exports = router;