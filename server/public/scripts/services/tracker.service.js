app.service( 'TrackerService',  ['$http', '$mdDialog', '$mdToast', function( $http, $mdDialog, $mdToast ) {
    console.log( 'TrackerService loaded' );
    
    let self = this;
    self.projectsArray = { list: [] };
    self.fullTable = { list: [] };
    self.editObject = { list: [] };

    // GET for /manage
    self.getProjects = function() {
        console.log( 'in GET service' );
        $http({
            method: 'GET',
            url: ('/manage')
        }).then( ( response ) => {
            console.log( response );
            self.projectsArray.list = response.data;
        }).catch( ( error ) => {
            console.log( 'error in getProjects:', error );
        })
    } // end GET for /manage

    // POST for /add
    self.postEntry = function( url ) {
        return $http({
            method: 'POST',
            url: `/${url}`,
            data: self.newEntry
        }).then( ( response ) => {
            console.log( 'back from POST entry with:', response );
        }).catch( ( error ) => {
            console.log( 'error in POST entry:', error );
        });
    }; // end post Entry

    self.postProject = function( url ) {
        return $http({
            method: 'POST',
            url: `/${url}`,
            data: self.newProject
        }).then( ( response ) => {
            console.log( 'back from POST project with:', response );
        }).catch( ( error ) => {
            console.log( 'error in POST project:', error );
        });
    }; // end post Project

    self.updateProject = function( url ) {
        return $http({
            method: 'PUT',
            url: `/${url}`,
            data: self.req.params
        }).then( ( response ) => {
            console.log( 'back from POST with:', req.params );
        }).catch( ( error ) => {
            console.log( 'error in POST:', error );            
        }); 
    };// end updateProject

    self.deleteProject = function( url ) {
        console.log( 'Deleting this project' );
        console.log( deleteProject );
        if ( confirm( 'Do you want to delete this project?' ) ) {
            $http({
                method: 'DELETE',
                url: `/${url}/${url._id}`
            }).then( function( response ) {
                self.getProjects();
            }).catch( function( error ) {
                console.log( 'error deleting project', error );
            });
        };
        
    }; // end deleteProject

    self.getProjects();
}]);