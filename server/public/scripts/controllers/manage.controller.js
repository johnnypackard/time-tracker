app.controller( 'ManageController', ['TrackerService', function(TrackerService) {

    let self = this;
    class Project {
        constructor( project, totalProjected, totalActual, totalVariance ) {
            this.project = project;
            this.totalProjected = totalProjected;
            this.totalActual = totalActual;
            this.totalVariance = totalVariance;
        } // end constructor 
                // might need to change projected, actual, and variance
                // depending on how they work with postgres
    } // end class Project
    
    self.addProject = function() {
        let newProject = new Project( self.project, self.totalProjected, self.totalActual, self.totalVariance );
        TrackerService.getProjects( newProject ).then( function() {
            console.log( 'in manage.controller');
        }).catch( function( error ) {
            console.log( 'error in manage.controller', error );
        }); // end newProject add
    }; // end addProject

    self.displayProjects = function() {
        TrackerService.getProjects( 'project').then( function() {
            self.allProjects = TrackerService.projectsArray;
        });
    }; // end displayProjects

    self.deleteProject = function() {
        console.log( 'in deleteProject' );
        TrackerService.deleteProject( 'project', project.id ).then( function() {
            self.displayProjects();
        }); 
    }; // end deleteProject

    self.displayProjects();
    
}]);