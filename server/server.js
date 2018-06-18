// Requires
const express = require( 'express' );
const app = express();
const entry = require( './routes/add.router' );
const project = require( './routes/manage.router' );
const PORT = process.env.PORT || 5000;
const bodyParser = require( 'body-parser' );
// reports commented out for stretch goals !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//const reports = require( './routes/reports.router' );

// App uses
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() ); 
app.use( express.static( 'server/public' ));
app.use( '/add', entry );
app.use( '/manage', project );

// reports commented out for stretch goals!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//app.use( '/reports', reports ); 

// Spin up server
app.listen( PORT, function() {
    console.log( 'listening on port', PORT );
});