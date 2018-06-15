const pg = require( 'pg' );
const Pool = pg.Pool;

const config = {
    database: 'time_tracker',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};
const pool = new Pool( config );

pool.on('connect', ( client ) => {
    console.log( 'postgreSQL connected' );
});

pool.on( 'error', ( error, client ) => {
    console.log( 'error loading postgreSQL', error );
    process.exit( -1 );
});

module.exports = new pg.Pool( config );