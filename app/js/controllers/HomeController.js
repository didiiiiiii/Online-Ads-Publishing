'use strict';

//The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    //function ($scope, $rootScope, adsService, notifyService, pageSize) {
        //TODO
    //}
     function ($scope, adsService, notifyService) {
         adsService.getAds(
             null,
             function success(data) {
                 $scope.ads = data;
             },
             function error(err) {
                 notifyService.showError("Cannot load ads", err);
             }
         )
        //TODO
    }
);