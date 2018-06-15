// Requires
const express = require( 'express' );
const app = express();
const entry = require( './routes/add.router' );
const project = require( './routes/manage.router' );

// reports commented out for stretch goals !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//const reports = require( './routes/reports.router' );
const port = process.env.PORT || 5000;

// App uses
app.use( express.static( 'server/public' ));
app.use( '/add', entry );
app.use( '/manage', project );

// reports commented out for stretch goals!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//app.use( '/reports', reports ); 

// Spin up server
app.listen( port, function() {
    console.log( 'listening on port', port);
});