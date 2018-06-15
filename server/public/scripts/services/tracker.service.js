app.service( 'TrackerService', function( $http ) {
    console.log( 'TrackerApp.Service loaded' );
    
    let self = this;
    let projectsArray = [];

    self.getProjects = function( url ) {
        console.log( 'in GET service' );
        return $http({
            method: 'GET',
            url: `${url}`
        }).then( ( response ) => {
            console.log( response );
            console.log( `${url}` );
            self.projectsArray = response.data;
        }).catch( ( error ) => {
            console.log( 'error in getProjects:', error );
        });
    };

    self.postEntry = function( url ) {
        return $http({
            method: 'POST',
            url: `${url}`,
            data: self.newEntry
        }).then( ( response ) => {
            console.log( 'back from POST with:', response );
        }).catch( ( error ) => {
            console.log( 'error in POST:', error );
        });
    }; // end post Entry

    self.postProject = function( url ) {
        return $http({
            method: 'POST',
            url: `${url}`,
            data: self.newProject
        }).then( ( response ) => {
            console.log( 'back from POST with:', response );
        }).catch( ( error ) => {
            console.log( 'error in POST:', error );
        });
    }; // end post Project

    self.updateProject = function( url ) {
        return $http({
            method: 'PUT',
            url: `${url}`,
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
});