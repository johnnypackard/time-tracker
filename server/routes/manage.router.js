const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool' );

router.get( '/', function( req, res ) {
    pool.connect( function( errorConnectingToDatabase, client, done ) {
        if( errorConnectingToDatabase ) {
            console.log( 'error', errorConnectingToDatabase );
            res.sendStatus( 500 );
        } else {
            client.query( 'SELECT * FROM projects ORDER BY id;', function( errorMakingDatabaseQuery, result ) {
                done();
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
    console.log( 'in manage.router POST ', req.body );
    let newProject = req.body;
    const queryText = `INSERT INTO projects ("project_id", "projected_hours", "actual_time", "time_variance")
    VALUES ($1, $2, $3, $4);`;
    pool.query( queryText, [newProject.project_id, newProject.projected_hours, newProject.actual_time, newProject.time_variance])
    .then( ( result ) => {
        console.log( 'successfully added newProject', req.body );
        res.sendStatus( 201 )
    })
    .catch( ( error ) => {
        res.sendStatus( 500 );
    });
}); // end POST

router.put( '/', ( req, res ) => {
    const projectId = req.params.id;
    console.log( 'in manage.router PUT to update' );
    const queryText = 'UPDATE projects WHERE id-$1';
    poll.query( queryText, [ projectId ] )
    .then( ( result ) => {
        res.sendStatus( 200 );
    }).catch( ( error ) => {
        console.log( 'Error in PUT', error );
        res.sendStatus( 500 );
    });
});

router.delete( '/:id', ( req, res ) => {
    const entryId = req.params.id;
    console.log( 'in manage.router DELETE', req.params.id );
    const queryText = 'DELETE FROM projects WHERE id=$1';
    pool.query( queryText , [entryId ] )
    .then( ( result ) => {
        console.log( 'successful DELETE of project', result );
        res.sendStatus( 200 );
    })
    .catch( ( error ) => {
        console.log( 'error in manage.router DELETE', error );
        res.sendStatus( 500 );
    });
}); // end DELETE
module.exports = router;