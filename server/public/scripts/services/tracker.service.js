app.service( 'TrackerService', function( $http ) {
    console.log( 'TrackerApp.Service loaded' );
    
    let self = this;
    let projectsArray = [];

    self.getProjects = function( project ) {
        console.log( 'in GET service' );
        return $http({
            method: 'GET',
            url: '/manage'
        }).then( ( response ) => {
            console.log( response );
            self.projectsArray = response.data;
        }).catch( ( error ) => {
            console.log( 'error in getProjects:', error );
        });
    };

    self.entryAdd = function( entry ) {
        return $http({
            method: 'POST',
            url: '/add',
            data: self.newEntry
        }).then( ( response ) => {
            console.log( 'back from POST entry with:', response );
        }).catch( ( error ) => {
            console.log( 'error in POST entry:', error );
        });
    }; // end post Entry

    self.addProject = function( project ) {
        return $http({
            method: 'POST',
            url: '/add',
            data: self.newProject
        }).then( ( response ) => {
            console.log( 'back from POST project with:', response );
        }).catch( ( error ) => {
            console.log( 'error in POST project:', error );
        });
    }; // end post Project

    self.updateProject = function( project ) {
        return $http({
            method: 'PUT',
            url: '/add',
            data: self.req.params
        }).then( ( response ) => {
            console.log( 'back from POST with:', req.params );
        }).catch( ( error ) => {
            console.log( 'error in POST:', error );            
        }); 
    };// end updateProject

    self.deleteProject = function( project ) {
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

    self.addProject();
    self.entryAdd();
});