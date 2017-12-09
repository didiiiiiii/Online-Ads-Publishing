//controller that makes the authorization service available in the entire application; 
//it is injected in the $scope, which is inherited in all elements inside the <html> element

'use strict';

//the AppController holds the presentation logic for the entire app (common for all screens)
app.controller('AppController',
    function ($scope, authService) {
        //put the authService in the $scope to make it accessible from all screens
        $scope.authService = authService;
    }
);