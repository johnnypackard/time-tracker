// Requires
const express = require( 'express' );
const app = express();
const entryAdd = require( './routes/add.router' );
const projectManager = require( './routes/manage.router' );
const reportsView = require( './routes/reports.router' );
const port = process.env.PORT || 5000;

// App uses
app.use( express.static( 'server/public' ));
app.use( '/add', entryAdd );
app.use( '/manage', projectManager );
app.use( '/reports', reportsView );

// Spin up server
app.listen( port, function() {
    console.log( 'listening on port', port);
});