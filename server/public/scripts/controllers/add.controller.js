app.controller( 'AddController', ['TrackerService', function(TrackerService) {

    let self = this;
    class Entries {
        constructor( entry, project, date, startTime, endTime ) {
            this.entry = entry;
            this.project = project;
            this.date = date;
            this.startTime = startTime;
            this.endTime = endTime;
        } // end constructor
    } // end class Entries

    self.entryAdd = function() {
        let newEntry = new Entries( self.entry, self.project, self.date, self.startTime, self.endTime );
        TrackerService.getProjects( newEntry ).then( function() {
            console.log( 'in entryAdd', newEntry );
        }).catch( function( error ) {
            console.log( 'error in entryAdd', error );
        }); // end newEntry add
    }; // end entryAdd

    self.displayProjects = function() {
        TrackerService.getProjects( 'entry').then( function() {
            self.allProjects = TrackerService.projectsArray;
        });
    }; // end displayProjects

    self.deleteEntry = function() {
        console.log( 'in deleteEntry' );
        TrackerService.deleteEntry( 'entry', entry.id).then( function() {
            self.displayProjects();
        });
    }; // end deleteEntry

    self.displayProjects();

}]);