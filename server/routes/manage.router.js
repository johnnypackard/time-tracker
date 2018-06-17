const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool' );

router.post( '/', ( req, res ) => {
    console.log( 'in manage.router POST ', req.body );
    let newProject = req.body;
    let queryText = `INSERT INTO projects ("project_id", "projected_hours", "actual_time", "time_variance")
                    VALUES ($1, $2, $3, $4);`;
    pool.query( queryText, [newProject.project_id, newProject.projected_hours, newProject.actual_time, newProject.time_variance])
        .then( ( result ) => {
            res.sendStatus( 201 )
        })
        .catch( ( error ) => {
            console.log( 'error in manage.router POST', error );
            res.sendStatus( 500 );
        })
}) // end POST

router.get( '/', function( req, res ) {
    console.log( 'manage.router GET' );
    let queryText = `SELECT * FROM projects;`;
    pool.query( queryText )
        .then( ( result ) => {
            console.log( 'return from manage.router GET' );
            res.send( result.rows );
        })
        .catch( ( error ) => {
            console.log( 'error in manage.router GET', error );
            res.sendStatus( 500 )
        })
}) // end manage.router GET

// router.put( '/', ( req, res ) => {
//     const projectId = req.params.id;
//     console.log( 'in manage.router PUT to update' );
//     const queryText = 'UPDATE projects WHERE id-$1';
//     poll.query( queryText, [ projectId ] )
//     .then( ( result ) => {
//         res.sendStatus( 200 );
//     }).catch( ( error ) => {
//         console.log( 'Error in PUT', error );
//         res.sendStatus( 500 );
//     });
// });

router.delete( '/:id', ( req, res ) => {
    let entryId = req.params.id;
    console.log( 'in manage.router DELETE', req.params.id );
    let queryText = `DELETE FROM projects WHERE id = ${project_id};`;
    pool.query( queryText )
        .then( ( result ) => {
            console.log( 'successful DELETE of project', result );
            res.sendStatus( 200 );
        })
        .catch( ( error ) => {
            console.log( 'error in manage.router DELETE', error );
            res.sendStatus( 500 );
        })
}) // end DELETE

module.exports = router;