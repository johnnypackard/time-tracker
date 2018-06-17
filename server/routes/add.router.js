const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool' );

router.post( '/', ( req, res ) => {
    console.log( 'in add.router POST ', req.body );
    let newEntry = req.body;
    let queryText = `INSERT INTO entries ("entry", "project", "date", startTime", "endTime")
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query( queryText, [newEntry.entry, newEntry,project_id, newEntry.date, newEntry.startTime, newEntry.endTime] )
    .then( ( result ) => {
        res.sendStatus( 201 )
    })
    .catch( ( error ) => {
        console.log( 'error in add.router POST', error );
        res.sendStatus( 500 );
    })
}) // end POST

router.get( '/', function( req, res ) {
    console.log( 'in add.router GET' );
    let queryText = `SELECT * FROM entries ORDER by id;`;
        pool.query( queryText )
        .then( ( result ) => {
            res.send( result.rows );
        })
        .catch( ( error ) => {
            console.log( 'in add.router GET', error );
            res.sendStatus( 500 )
        })
}) // end get from pool

// router.put( '/', ( req, res ) => {
//     const entryId = req.params.id;
//     console.log( 'in add.router PUT to update' );
//     const queryText = 'UPDATE entry WHERE id-$1';
//     poll.query( queryText, [ entryId ] )
//     .then( ( result ) => {
//         res.sendStatus( 200 );
//     }).catch( ( error ) => {
//         console.log( 'Error in PUT', error );
//         res.sendStatus( 500 );
//     });
// });

router.delete( '/:id', ( req, res ) => {
    let entryId = req.params.id;
    console.log( 'in add.router DELETE', entryId );
    let queryText = 'DELETE FROM entries WHERE id=$1';
    pool.query( queryText , [ entryId ] )
        .then( ( result ) => {
            console.log( 'successful DELETE of entry', result );
            res.sendStatus( 200 );
        })
        .catch( ( error ) => {
            console.log( 'error in add.router DELETE', error );
            res.sendStatus( 500 );
        })
}) // end DELETE

module.exports = router;