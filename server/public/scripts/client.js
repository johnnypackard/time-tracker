let app = angular.module( 'TrackerApp', ['ngRoute', 'ngMaterial', 'ngMessages'] );

app.config( ['$routeProvider', 'mdThemingProvider', function( $routeProvider, $mdThemingProvider ) {
    console.log( 'Route config loaded' );
    
    $mdThemingProvider.theme( 'default' )
    .primaryPallette( 'grey' )
    .accentPallete( 'deep-purple');

    $routeProvider
        .when( '/', {
            templateUrl: 'views/add.html',
            controller: 'AddController as vm'
        })
        .when( '/manage', {
            templateUrl: 'views/manage.html',
            controller: 'ManageController as vm'
        })
        .when( '/reports', {
            templateUrl: 'views/reports.html',
            controller: 'ReportsController as vm'
        })
        .otherwise({
            template: '<h1>404 Not Found</h1><br><h3>That page does not exist!</h3>'
        });
}]);